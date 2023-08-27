// import Dashboard from "./Dashboard/Dashboard";
import "./Sidebar.css"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';
import DateTime from "./DateTime.jsx";
import logo from '../logomni.png';

const Sidebar = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('Dasbor');

    const handleLogout = () => {
        setTimeout(() => {
            localStorage.removeItem("token"); // Remove token from storage
            navigate("/login"); // Redirect to login page
        }, 500);
    //   localStorage.removeItem("token"); // Remove token from storage
    //   navigate("/login"); // Redirect to login page
    };

    const handleNavigateToInventaris = () => {
        setTimeout (() => {
            setActiveCategory('Inventaris');
            navigate("/admin/inventaris"); // Redirect to inventaris dashboard
        }, 500)
        // navigate("/admin/inventaris"); // Redirect to inventaris dashboard
    };

    const handleNavigateToMainDashboard = () => {
        setActiveCategory('Dasbor');
        setTimeout(() => {
            setActiveCategory('Dasbor');
            navigate("/admin/dashboard"); // Redirect to inventaris dashboard
        }, 500);
        // navigate("/admin/dashboard"); // Redirect to inventaris dashboard
    };

    return (
        <div className="sidebar">
            <div className="top">
                <img src={logo} alt="Logo Masjid Nurul Islam" className="logo" />
                {/* <span className="admin-logo">adminNuris</span> */}
                {/* <Timestamp date={Date} options={{ includeDay: true, twentyFourHour: true }} /> */}
                
            </div>
            <hr className="border-dashboard"/>
            <DateTime />
            {/* <hr className="border-dashboard"/> */}
            <div className="middle">
                <ul className="list-border">
                    <p className="title-category">Utama</p>
                    {/* <li className="list-category" onClick={handleNavigateToMainDashboard}>
                        <SpaceDashboardIcon className="icon" />
                        <span className="nama-category">Dasbor</span>
                    </li> */}
                    <li
                    className={`list-category ${activeCategory === 'Dasbor' ? 'active' : ''}`}
                    onClick={handleNavigateToMainDashboard}
                    >
                        <SpaceDashboardIcon className="icon" />
                        <span className="nama-category">Dasbor</span>
                    </li>
                    <li className="list-category" onClick={handleNavigateToInventaris}>
                        <InventoryIcon className="icon" />
                        <span className="nama-category">Inventaris</span>
                    </li>
                    <p className="title-category">Pengguna</p>
                    <li className="list-category" onClick={handleLogout}>
                        <LogoutIcon className="icon" />
                        <span className="nama-category">Keluar</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;