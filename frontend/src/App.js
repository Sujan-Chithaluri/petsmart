import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SerivceCategory from "./Pages/ServiceCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
import Register from "./Pages/Register";
import YourOrders from "./Pages/YourOrders";
import YourAppointments from "./Pages/YourAppointments";
import { Appointment } from "./Pages/Appointment";

import Faqs from "./Pages/Faqs";
import Pharmacy from "./Pages/Pharmacy";
import ChangePassword from "./Pages/ChangePassword";
import ForgotPassword from "./Pages/ForgotPassword";

import { useAuth } from "./Context/AuthContext";
import Layout from "./Components/Layout";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/products" element={<Product />} />
            <Route path="/pharmacy" element={<Pharmacy />} />

            <Route
              path="/parks"
              element={<SerivceCategory category="parks" />}
            />

            <Route
              path="/training"
              element={<SerivceCategory category="training" />}
            />

            <Route
              path="/grooming"
              element={<SerivceCategory category="grooming" />}
            />

            <Route
              path="/treatment"
              element={<SerivceCategory category="treatment" />}
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {isLoggedIn ? (
              <>
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/your-orders" element={<YourOrders />} />
                <Route
                  path="/your-appointments"
                  element={<YourAppointments />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/change-password" element={<ChangePassword />} />
              </>
            ) : (
              <>
                <Route path="/appointment" element={<Login />} />
                <Route path="/your-orders" element={<Login />} />
                <Route path="/your-appointments" element={<Login />} />
                <Route path="/cart" element={<Login />} />
                <Route path="/change-password" element={<Login />} />
              </>
            )}

            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
