import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import MainLayout from "./Layout/MainLayout";
import EmployeListPage from "./Pages/EmployeListPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/employee-list" element={<EmployeListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
