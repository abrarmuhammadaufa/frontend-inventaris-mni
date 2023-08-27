// import { func } from "prop-types";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalTambah.css';

function ModalEdit(props) {
    const [jumlahBarang, setJumlahBarang] = useState('');
    const [keterangan, setKeterangan] = useState('');

    const [editedData, setEditedData] = useState({
        no_barang: props.noBarang || '',
        jumlah_barang: '',
        keterangan: '',
    }); // State untuk data yang diedit
    console.log(editedData)
    const handleEditSubmit = (event) => {
        event.preventDefault();

        const perubahanBarang = {
            jumlah_barang: jumlahBarang,
            keterangan: keterangan,
        };
        // Lakukan permintaan PUT ke server dengan editedData
        axios
            .put(`http://127.0.0.1:8081/edit_barang/${editedData.no_barang}`, perubahanBarang)
            .then((response) => {
                console.log('Data barang telah diperbarui:', response.data);
                // Setelah berhasil mengupdate, perbarui data dan tutup modal
                props.onHide();
                // Anda mungkin ingin mengirimkan notifikasi atau melakukan penanganan lainnya
                props.handleDataChange();
            })
            .catch((error) => {
                console.error('Error saat mengupdate barang:', error);
                // Handle error here, e.g., show an error message to the user
        });
    };

    useEffect(() => {
        // Set value input sesuai dengan data barang yang ingin diubah
        if (props.barangToEdit) {
            setEditedData({
                no_barang: props.barangToEdit.no_barang,
                jumlah_barang: props.barangToEdit.jumlah_barang,
                keterangan: props.barangToEdit.keterangan,
            });
        }
    }, [props.barangToEdit]);

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
                    Ubah Data Barang
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* {notification && (
                        <div className={`notification ${notification.type}`}>
                            {notification.message}
                        </div>
                    )} */}
                    <form onSubmit={handleEditSubmit}>
                        <div className="form-group">
                            <strong>{props.namaBarang}</strong>  
                        </div>
                        <div className="form-group">
                            <label>Jumlah Barang</label>
                            <input className="input" type="number" name="jumlah_barang"
                            value={jumlahBarang}
                            onChange={(e) => setJumlahBarang(e.target.value)}
                            /*value={editedData.jumlah_barang || ''}
                            onChange={handleEditChange}*/ />
                        </div>
                        <div className="form-group">
                            <label>Keterangan</label>
                            <input className="input" type="text" name="keterangan"
                            value={keterangan}
                            onChange={(e) => setKeterangan(e.target.value)}
                            /*value={editedData.keterangan || ''}
                            onChange={handleEditChange}*/ />
                        </div>
                        <div className="button-container">
                            <button className="button" type="submit">
                                Ubah
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

export default ModalEdit;