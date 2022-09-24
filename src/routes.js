import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/register'

export default function Routas() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Logon/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
      </ BrowserRouter>
    );
}