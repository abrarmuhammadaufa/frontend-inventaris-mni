// import { func } from "prop-types";
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import './modalHapus.css';

function ModalHapus(props) {    
    return (
        <>
            <Modal {...props} 
            size="md" 
            aria-labelledby="contained-modal-title-vcenter"
            centered className="custom-modal">
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">Konfirmasi Hapus</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Anda yakin ingin menghapus barang <strong>{props.namaBarang}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Batal
                    </Button>
                    <Button variant="danger" onClick={props.hapusBarang}>
                        Hapus
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );  
}

export default ModalHapus;