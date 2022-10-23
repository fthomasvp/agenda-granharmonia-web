import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { RequireAuth } from "../features/authentication";
import { MobileContainer } from "../layouts";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import NotFound from "./NotFound";
import ResetPassword from "./ResetPassword";
import VerifyCode from "./VerifyCode";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route element={<MobileContainer />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route element={<MobileContainer showHeader />}>
            <Route path="/home" element={<>HomePage</>} />
          </Route>
        </Route>

        <Route element={<MobileContainer />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
