import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';


import DarkVeil from './blocks/DarkVeil/DarkVeil.tsx';
import Header from './components/Header.tsx';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage.tsx';
import './App.css';
import ExperiencePage from "./pages/ExperiencePage.tsx";

const App = () => {
    return (
        <Router>
            <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
                <DarkVeil />
                {/*main-content*/}
                <Box sx={{ position: 'relative', zIndex: 1, padding: 2 }}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<ExperiencePage />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
};

export default App;