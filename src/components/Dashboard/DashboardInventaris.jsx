import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Sidebar';
import ModalTambah from '../ModalTambah';
import ModalEdit from '../ModalEdit';
import ModalHapus from '../ModalHapus';
import "./DashboardInventaris.css";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

async function getBarang() {
  try {
    const response = await axios.get('http://127.0.0.1:8081/barang');
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error;
  }
}

export default function DashboardInventaris() {
  const [dbBarang, setBarang] = useState([]);
  const navigate = useNavigate();
  const [tambahModalShow, setTambahModalShow] = React.useState(false);
  const [editModalShow, setEditModalShow] = React.useState(false);
  const [dataChanged, setDataChanged] = useState(false);
  const [hapusModalShow, setHapusModalShow] = React.useState(false);
  const [barangToDelete, setBarangToDelete] = useState(null);
  const [barangToEdit, setBarangToEdit] = useState(null);

  const showHapusModal = (barang) => {
    setBarangToDelete(barang);
    setHapusModalShow(true);
  };

  const showEditModal = (barang) => {
    setBarangToEdit(barang);
    setEditModalShow(true);
  };

  // const handleDataChange = () => {
  //   // Panggil kembali data barang setelah berhasil mengedit
  //   getBarang()
  //     .then(data => {
  //       setBarang(data);
  //       setEditModalShow(false); // Tutup modal edit setelah berhasil mengedit
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // };

  const confirmHapusBarang = () => {
    if (barangToDelete) {
      // Lakukan permintaan hapus ke server atau tindakan lainnya di sini
      axios.delete(`http://127.0.0.1:8081/hapus_barang/${barangToDelete.no_barang}`)
        .then(response => {
          console.log('Barang telah dihapus:', response.data);
          // Setelah berhasil menghapus, perbarui data dan tutup modal
          setTimeout (() => {
            setHapusModalShow(false);
            setBarangToDelete(null);
            setDataChanged(true);
          }, 1000)
        })
        .catch(error => {
          console.error('Error saat menghapus barang:', error);
        });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('Token not found. Redirecting to login...');
      navigate('/login'); // Redirect to login if token is missing
    } else {
      console.log('Token found. Fetching data...');
      getBarang()
        .then(data => {
          // console.log('Data fetched:', data);
          setBarang(data);
          setDataChanged(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);// Handle error here, e.g., show an error message to the user
        });
    }    
  }, [navigate, dataChanged]);

  // const isAddBarang = localStorage.getItem("isAddBarang");
  // useEffect(() => {
  //   const getData = async() => {
  //     const response = await axios.get('http://127.0.0.1:8081/barang')

  //     setBarang(response.data)
  //   }
  //   getData();
  //   // console.log("test")
  // }, [isAddBarang])


  return(
    <div className="dashboard-default">
      <Sidebar />
      <div className="dashboard-container">
        <h1 className="judul-inventaris-admin">Kelola Inventaris</h1>
        <div className="container">
          <Button className="btn btn-tambah" onClick={() => setTambahModalShow(true)}>
            <LibraryAddIcon className="icon" />
            <span className="nama-category">Tambah Barang</span>
          </Button>
          <ModalTambah
            show={tambahModalShow}
            onHide={() => setTambahModalShow(false)} />
          <ModalHapus 
            show={hapusModalShow} 
            onHide={() => setHapusModalShow(false)}
            namaBarang={barangToDelete ? barangToDelete.nama_barang : ''}
            hapusBarang={confirmHapusBarang} />
          <ModalEdit 
            show={editModalShow} 
            namaBarang={barangToEdit ? barangToEdit.nama_barang : ''}
            onHide={() => setEditModalShow(false)}
            handleDataChange={() => setDataChanged(true)}
            barangToEdit={barangToEdit}
            jumlahBarang={barangToEdit ? barangToEdit.jumlah_barang : ''}
            keterangan={barangToEdit ? barangToEdit.keterangan : ''} />
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Jumlah Barang (pcs)</th>
                    <th>Keterangan</th>
                    <th>Aksi</th>                    
                  </tr>
                </thead>
                <tbody>
                  {dbBarang?.map((barang, index) => {
                    return (
                      <tr key={barang.no_barang}>
                        <td>{index + 1}</td>
                        <td>{barang.nama_barang}</td>
                        <td>{barang.jumlah_barang}</td>
                        <td>{barang.keterangan}</td>
                        <td>
                          <Button className="btn btn-edit" onClick={() => showEditModal(barang)}>
                            <EditIcon className="icon" />
                          </Button>
                          <Button className="btn btn-hapus" onClick={() => showHapusModal(barang)}>
                            <DeleteIcon className="icon" />
                          </Button>
                        </td>
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