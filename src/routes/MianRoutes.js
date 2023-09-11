import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, ManageEmployee } from '../layouts';

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employee/:_id" element={<ManageEmployee />} />

            <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
            <Route path="*" element={<Navigate to="/dashboard" replace={true} />} />
        </Routes>
    );
};

export default MainRoute;
