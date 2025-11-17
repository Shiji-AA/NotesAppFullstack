import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from './components/Landingpage';
import Register from './components/Register';
import Login from './components/LoginPage';
import Dashboard from './pages/Dashboard';
import PageNotFound from './components/PageNotFound';
import ProtectedRoute from './components/ProtectedRoute';
import AddNotes from './components/AddNotes';
import EditNotes from './components/EditNotes';
function App() {
  return (
    <Router>
      <Toaster position="top-right"/>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<LandingPage />} />   
        <Route path="/login" element={<Login />} />             
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/dashboard" element={
              <ProtectedRoute>
              <Dashboard />
              </ProtectedRoute> }/>

        <Route path="/addNotes" element={ <ProtectedRoute><AddNotes /> </ProtectedRoute>} />    
        <Route path="/editNotes/:id" element={ <ProtectedRoute><EditNotes /></ProtectedRoute>} />   
        </Routes>
        </Router>
  )
}

export default App
