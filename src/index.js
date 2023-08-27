import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {
  Home,
  Kegiatan,
  Dokumentasi,
  Inventaris,
  Login
} from "./components";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
// import Preferences from "./components/Preferences/Preferences.jsx";
// import { useToken } from './components/useToken.jsx';
// import setToken from './components/useToken';
import DashboardInventaris from "./components/Dashboard/DashboardInventaris";

// const DashboardLayout = ({ children }) => (
  

//   /*// Jika tidak ada token, tampilkan komponen Login
//   if (!token) {
//     return <Login setToken={setToken} />;
//   }*/

//   //return (
//     <div>
//       {/* Komponen ini tidak akan menampilkan header */}
//       {children}
//     </div>
//   //);
// );
// const [token, setToken] = useState();
// const { token } = useToken();

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/kegiatan" element={<Kegiatan />} />
//       <Route path="/dokumentasi" element={<Dokumentasi />} />
//       <Route path="/inventaris" element={<Inventaris />} />
//       {/* <Route path="/login" element={<Login setToken={ setToken } />} /> */}
//       <Route path="/login" element={<Login />} />
//       {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//       <Route path="/dashboard" element={token ?<Dashboard /> : <Login />} />  
//       <Route path="/dashboard/inventaris" element={<DashboardInventaris />} />    
//     </Routes>
//   </Router>,

//   document.getElementById("root")
// );

function Index() {
  // const { token } = useToken();
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/dokumentasi" element={<Dokumentasi />} />
        <Route path="/inventaris" element={<Inventaris />} />
        {/* <Route path="/login" element={<Login setToken={ setToken } />} /> */}
        <Route path="/login" element={<Login />} />
        {token ? <Route path="/" element={<Navigate to="/admin/dashboard" />} /> : null}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={token ?<Dashboard /> : <Login />} />   */}
        <Route path="/admin/inventaris" element={<DashboardInventaris />} />    
      </Routes>
    </Router>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
serviceWorker.unregister();