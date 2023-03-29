import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Tools } from './pages/tools/tools';
import { AddToolsPage } from './pages/tools/AddTools';
import { HomePage } from './pages/index';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/add" element={<AddToolsPage />} />
            </Routes>
        </Router>
    );
}