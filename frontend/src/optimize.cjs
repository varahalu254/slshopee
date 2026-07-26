const fs = require('fs');
let code = fs.readFileSync('App.jsx', 'utf8');

// Convert imports from './pages/...' to lazy
code = code.replace(/import ([A-Za-z0-9_]+) from '\.\/pages\/([^']+)';/g, 'const $1 = lazy(() => import(\'./pages/$2\'));');
code = code.replace(/import { useEffect } from 'react';/, "import { useEffect, Suspense, lazy } from 'react';");
code = code.replace(/<Routes>/g, '<Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div></div>}><Routes>');
code = code.replace(/<\/Routes>/g, '</Routes></Suspense>');

fs.writeFileSync('App.jsx', code);
console.log('App.jsx optimized with lazy loading.');
