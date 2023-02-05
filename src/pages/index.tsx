import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ScrollToTop } from "../components/navigation";
import { Loading } from "../components/ui";
import { RequireAuth } from "../features/authentication";
import { MobileLayout } from "../layouts";
const BookingList = lazy(() => import("./BookingList"));
const BookingNew = lazy(() => import("./BookingNew"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const NotFound = lazy(() => import("./NotFound"));
const ResetPassword = lazy(() => import("./ResetPassword"));
const VerifyCode = lazy(() => import("./VerifyCode"));

export default function Pages() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route element={<MobileLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route element={<MobileLayout showHeader />}>
              <Route path="/home" element={<Home />} />
              <Route path="/bookings" element={<BookingList />} />
              <Route path="/bookings/:name" element={<BookingNew />} />
            </Route>
          </Route>

          <Route element={<MobileLayout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
