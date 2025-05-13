import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import HomePage from "./pages/Homepage/HomePage";
import CatalogFilms from "./pages/CatalogFilms/CatalogFilms";
import CatalogSerials from "./pages/CatalogSerials/CatalogSerials";
import CatalogAnime from "./pages/CatalogAnime/CatalogAnime";
import AuthPage from "./pages/AuthPage/AuthPage";
import { AuthProvider } from './contexts/AuthContext'; //
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='CatalogFilms' element={<CatalogFilms />} />
                    <Route path='CatalogSerials' element={<CatalogSerials />} />
                    <Route path='CatalogAnime' element={<CatalogAnime />} />
                    <Route path='AuthPage' element={<AuthPage />} />
                    <Route path="ProfilePage" element={<ProfilePage />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
