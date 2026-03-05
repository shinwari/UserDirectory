import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import ListUsers from "./pages/ListUsers";
import AddUser from "./pages/AddUser";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/users/add" element={<AddUser />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}