import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident';

export default function Routas() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Logon/>} />
            <Route path="/register" element={<Register/>} />

            <Route path="/profile" element={<Profile/>} />
            <Route path="/incidents/new" element={<NewIncident/>} />
        </Routes>
      </ BrowserRouter>
    );
}