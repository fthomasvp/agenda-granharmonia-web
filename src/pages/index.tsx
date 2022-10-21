import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { RequireAuth } from "../features/authentication";
import { PageContainer } from "../layouts";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import NotFound from "./NotFound";
import VerifyCode from "./VerifyCode";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route element={<RequireAuth />}>
          <Route
            path="/home"
            element={<PageContainer>HomePage</PageContainer>}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
