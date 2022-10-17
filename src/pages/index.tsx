import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { RequireAuth } from "../features/authentication";
import { PageContainer } from "../layouts";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import VerifyCode from "./VerifyCode";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />

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
