import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './hooks/useTasks';
import HomePage from './pages/HomePage';
import PlannerPage from './pages/PlannerPage';

export default function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planner" element={<PlannerPage />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}
