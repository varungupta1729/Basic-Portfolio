import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useState } from "react";
import Loader from "./components/Layout/Loader.jsx";
import Header from "./components/Layout/Header.jsx";
import { Toaster } from "react-hot-toast";
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const SkillsPage = lazy(() => import("./pages/SkillsPage.jsx"));

function App() {
  const [activeNav, setActiveNav] = useState("home");
  return (
    <div className="w-full">
      <Toaster />
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage activeNav={activeNav} setActiveNav={setActiveNav} />
            }
          />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
