import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./ScrollToTop";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Procedure from "./components/pages/Procedure";
import Appointment from "./components/pages/Appointment";
import Contact from "./components/pages/Contact";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");

    return (
        <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
            <ScrollToTop />

            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                language={language}
                setLanguage={setLanguage}
            />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            darkMode={darkMode}
                            language={language}
                        />
                    }
                />

                <Route
                    path="/about"
                    element={
                        <About
                            darkMode={darkMode}
                            language={language}
                        />
                    }
                />

                <Route
                    path="/services"
                    element={
                        <Service
                            darkMode={darkMode}
                            language={language}
                        />
                    }
                />

                <Route
                    path="/procedures"
                    element={
                        <Procedure
                            darkMode={darkMode}
                            language={language}
                        />
                    }
                />

                <Route
                    path="/appointment"
                    element={
                        <Appointment
                            darkMode={darkMode}
                            language={language}
                        />
                    }
                />

                <Route
                    path="/contact"
                    element={
                        <Contact
                            darkMode={darkMode}
                            language={language}
                        />
                    }
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </div>
    );
}
