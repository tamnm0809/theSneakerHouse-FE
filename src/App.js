import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Overview from "./view/admin/overview/Over";
import ListAccounts from "./view/admin/accounts/list-accounts";
import ListCategories from "./view/admin/categories/list-categories";
import ListProducts from "./view/admin/products/list-products";
import ListSizeImage from "./view/admin/image&size/list-size";
import ListOrders from "./view/admin/orders/list-orders";
import Navigation from "./view/admin/common/Navigation";
import Nav from "./view/user/common/nav";
import Header from "./view/admin/common/Header";
import Login from "./view/login/login";
import HomePage from "./view/user/homepage/HomePage";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith(
    "/the-sneaker-house/admin"
  );

  return (
    <>
      {isAdminRoute && <Header />}
      <div className={isAdminRoute ? "d-flex" : ""}>
        {isAdminRoute ? <Navigation /> : <Nav />}
        <Routes>
          <Route
            path="/the-sneaker-house/admin/management/overview"
            element={
              <ProtectedRoute>
                <Overview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/the-sneaker-house/admin/management/accounts"
            element={
              <ProtectedRoute>
                <ListAccounts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/the-sneaker-house/admin/management/categories"
            element={
              <ProtectedRoute>
                <ListCategories />
              </ProtectedRoute>
            }
          />
          <Route
            path="/the-sneaker-house/admin/management/products"
            element={
              <ProtectedRoute>
                <ListProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/the-sneaker-house/admin/management/orders"
            element={
              <ProtectedRoute>
                <ListOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/the-sneaker-house/admin/management/sizes-images"
            element={
              <ProtectedRoute>
                <ListSizeImage />
              </ProtectedRoute>
            }
          />
          {/* User Routes */}
          <Route path="/the-sneaker-house/homePage" element={<HomePage />} />

          {/* Auth Route */}
          <Route path="/the-sneaker-house/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
