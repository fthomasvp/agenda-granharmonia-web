import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ScrollToTop } from "../components/navigation";
import { Loading } from "../components/ui";
import { RequireAuth } from "../features/authentication";
import { MainLayout } from "../layouts";
const BookingList = lazy(() => import("./BookingList"));
const BookingNew = lazy(() => import("./BookingNew"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const NotFound = lazy(() => import("./404"));
const ResetPassword = lazy(() => import("./ResetPassword"));
const VerifyCode = lazy(() => import("./VerifyCode"));
const Location = lazy(() => import("./Location"));

export default function Pages() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route element={<MainLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route element={<MainLayout />}>
              <Route path="/location" element={<Location />} />
            </Route>
            <Route element={<MainLayout showHeader />}>
              <Route path="/home" element={<Home />} />
              <Route path="/bookings" element={<BookingList />} />
              <Route path="/bookings/:name" element={<BookingNew />} />
            </Route>
          </Route>

          <Route element={<MainLayout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
