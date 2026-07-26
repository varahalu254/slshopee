import { useState, useEffect } from 'react';
import { Mail, CheckCircle, Clock, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

const QueriesManagement = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedId, setExpandedId] = useState(null);

    const fetchQueries = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/queries`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (!res.ok) throw new Error('Failed to fetch queries');
            const data = await res.json();
            setQueries(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQueries();
    }, []);

    const handleStatusChange = async (id, newStatus) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/queries/${id}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ status: newStatus })
            });
            if (!res.ok) throw new Error('Failed to update status');
            setQueries(queries.map(q => q._id === id ? { ...q, status: newStatus } : q));
        } catch (err) {
            console.error(err);
            alert('Failed to update status');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this query?')) return;
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/queries/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (!res.ok) throw new Error('Failed to delete query');
            setQueries(queries.filter(q => q._id !== id));
        } catch (err) {
            console.error(err);
            alert('Failed to delete query');
        }
    };

    if (loading) return <div className="p-8 pb-32 flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div></div>;
    if (error) return <div className="p-8 pb-32 text-center text-red-500">Error: {error}</div>;

    return (
        <div className="p-8 pb-32 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                            <Mail className="w-6 h-6 text-orange-primary" />
                            Customer Queries
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">Manage contact form submissions</p>
                    </div>
                </div>

                {queries.length === 0 ? (
                    <div className="bg-white rounded-2xl p-12 text-center text-gray-500 border border-gray-100">
                        No queries found.
                    </div>
                ) : (
                    <div className="space-y-4">
                        {queries.map(query => (
                            <div key={query._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
                                <div
                                    className="p-6 flex items-center justify-between cursor-pointer"
                                    onClick={() => setExpandedId(expandedId === query._id ? null : query._id)}
                                >
                                    <div className="flex-1 flex items-center gap-6">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${query.status === 'resolved' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                                            {query.status === 'resolved' ? <CheckCircle className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-lg">{query.subject}</h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                                <span>{query.name}</span>
                                                <span>&bull;</span>
                                                <span>{new Date(query.createdAt).toLocaleDateString()}</span>
                                                <span>&bull;</span>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${query.status === 'resolved' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                                    {query.status === 'resolved' ? 'Resolved' : 'Pending'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleStatusChange(query._id, query.status === 'resolved' ? 'pending' : 'resolved');
                                            }}
                                            className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                                        >
                                            Mark as {query.status === 'resolved' ? 'Pending' : 'Resolved'}
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(query._id);
                                            }}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                        {expandedId === query._id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                                    </div>
                                </div>

                                {expandedId === query._id && (
                                    <div className="p-6 pt-0 border-t border-gray-100 mt-4 text-gray-700 bg-gray-50/50">
                                        <div className="grid grid-cols-2 gap-8 mt-4">
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Sender Info</h4>
                                                <div className="bg-white p-4 rounded-xl border border-gray-100">
                                                    <p className="font-medium">{query.name}</p>
                                                    <a href={`mailto:${query.email}`} className="text-blue-500 hover:underline">{query.email}</a>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Message</h4>
                                                <div className="bg-white p-4 rounded-xl border border-gray-100 whitespace-pre-wrap font-body text-sm leading-relaxed">
                                                    {query.message}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default QueriesManagement;
