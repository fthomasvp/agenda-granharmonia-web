import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { RequireAuth } from "../features/auth";
import { PageContainer } from "../layouts";
import Login from "./Login";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <RequireAuth>
              <PageContainer>HomePage</PageContainer>
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
