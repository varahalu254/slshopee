import express from 'express';
import Query from '../models/Query.js';
import { authenticate, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// @route   POST /api/queries
// @desc    Submit a new query
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const query = new Query({
            name,
            email,
            subject,
            message
        });
        const createdQuery = await query.save();
        res.status(201).json(createdQuery);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   GET /api/queries
// @desc    Get all queries
// @access  Private/Admin
router.get('/', authenticate, isAdmin, async (req, res) => {
    try {
        const queries = await Query.find({}).sort({ createdAt: -1 });
        res.json(queries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   PUT /api/queries/:id/status
// @desc    Update query status
// @access  Private/Admin
router.put('/:id/status', authenticate, isAdmin, async (req, res) => {
    try {
        const { status } = req.body;
        const query = await Query.findById(req.params.id);

        if (query) {
            query.status = status;
            const updatedQuery = await query.save();
            res.json(updatedQuery);
        } else {
            res.status(404).json({ message: 'Query not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   DELETE /api/queries/:id
// @desc    Delete a query
// @access  Private/Admin
router.delete('/:id', authenticate, isAdmin, async (req, res) => {
    try {
        const query = await Query.findById(req.params.id);

        if (query) {
            await Query.findByIdAndDelete(req.params.id);
            res.json({ message: 'Query removed' });
        } else {
            res.status(404).json({ message: 'Query not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
