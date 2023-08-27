import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from "../Sidebar";
import "./Dashboard.css";
// import { getToken } from "../useToken";



// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

async function getBarang() {
  try {
    const response = await axios.get('http://127.0.0.1:8081/barang');
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error;
  }
}

export default function Dashboard() {
  // const token = getToken();
  // const history = useHistory();
  const [dbBarang, setBarang] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve token from storage
    // console.log('Token:', token);

    if (!token) {
      console.log('Token not found. Redirecting to login...');
      navigate('/login'); // Redirect to login if token is missing
    } else {
      console.log('Token found. Fetching data...');
      getBarang()
        .then(data => {
          // console.log('Data fetched:', data);
          setBarang(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);// Handle error here, e.g., show an error message to the user
        });
    }
  }, [navigate]);
  //   if(!token) {
  //     // return <Redirect to="/login" />;
  //     history.push("/login");
  //   }

  //   getBarang();
  // }, []);

  // const getBarang = () => {
  //   axios
  //       .get('http://127.0.0.1:8081/barang')
  //       .then((res) => {
  //           console.log(res);
  //           setBarang(res.data);
  //       })
  //       .catch((err) => {
  //           console.log('Error fetching data:', err);
  //       });
  // }

  return(
    <div className="dashboard-default">
      <Sidebar />
      <div className="dashboard-container">
        <h1 className="judul-inventaris-admin">Daftar Inventaris</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Jumlah Barang (pcs)</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {dbBarang.map((barang, index) => {
                    return (
                      <tr key={barang.no_barang}>
                        <td>{index + 1}</td>
                        <td>{barang.nama_barang}</td>
                        <td>{barang.jumlah_barang}</td>
                        <td>{barang.keterangan}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>      
      </div>
    </div>
  );
}