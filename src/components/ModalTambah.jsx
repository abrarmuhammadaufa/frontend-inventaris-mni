// import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalTambah.css';

function ModalTambah(props) {
    const [formData, setFormData] = useState({
        nama_barang: '',
        jumlah_barang: '',
        keterangan: ''
    });

    const [notification, setNotification] = useState(null);
    const [dataChanged, setDataChanged] = useState(false);

    useEffect(() => {
        if (dataChanged && props.updateData) {
            // Panggil fungsi pembaruan data di sini
            props.updateData();
            // setDataChanged(true); // Setelah pembaruan, atur kembali ke false
            localStorage.setItem("isAddBarang", dataChanged)            
        }
    }, [dataChanged, props]);

    console.log(dataChanged)

    if (dataChanged) {
        // axios
    }

    const tambahSubmit = (event) => {
        event.preventDefault();

        if (formData.nama_barang === '' || formData.jumlah_barang === '' || formData.keterangan === '') {
            setNotification({ type: 'error', message: 'Harap isi semua field sebelum menambahkan data.' });
            setTimeout(() => {
                setNotification(null);
            }, 3000);
            return; // Menghentikan eksekusi fungsi jika ada field yang kosong
        }

        if (isNaN(formData.jumlah_barang)) {
            setNotification({ type: 'error', message: 'Jumlah barang harus berupa angka.' });
            setTimeout(() => {
                setNotification(null);
            }, 3000);
            return;
        }

        axios.post('http://127.0.0.1:8081/tambah_barang', formData)
            .then(response => {
                console.log('Response:', response.data);
                setNotification({ type: 'success', message: 'Data berhasil ditambahkan.' });
                setDataChanged(true);
                // setTimeout(() => {
                //     props.onHide();
                //     // setDataChanged(true); // Set state untuk memicu pembaruan data
                // }, 2000);
            })
            .catch(error => {
                console.error('Error:', error);
                setNotification({ type: 'error', message: 'Terjadi kesalahan saat menambahkan data.' });
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered className="custom-modal"
                >
                <Modal.Header /*closeButton={true}*/>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Tambah Barang
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {notification && (
                        <div className={`notification ${notification.type}`}>
                            {notification.message}
                        </div>
                    )}
                    <form onSubmit={tambahSubmit}>
                        <div className="form-group">
                            <label>Nama Barang</label>
                            <input className="input" type="text" name="nama_barang"
                            value={formData.nama_barang}
                            onChange={handleInputChange}/*onChange={e => setUsername(e.target.value)}*/ />
                        </div>
                        <div className="form-group">
                            <label>Jumlah Barang</label>
                            <input className="input" type="text" name="jumlah_barang"
                            value={formData.jumlah_barang}
                            onChange={handleInputChange}/*onChange={e => setPassword(e.target.value)}*/ />
                        </div>
                        <div className="form-group">
                            <label>Keterangan</label>
                            <input className="input" type="text" name="keterangan"
                            value={formData.keterangan}
                            onChange={handleInputChange}/*onChange={e => setPassword(e.target.value)}*/ />
                        </div>
                        <div className="button-container">
                            <button className="button" type="submit">
                                Tambah
                            </button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-close" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );  
}

export default ModalTambah;