import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import './Inventaris.css';


function Inventaris() {
  const [dbBarang, setBarang] = useState([]);

  useEffect(() => {
    getBarang();
  }, []);

  const getBarang = () => {
    axios
        .get('http://127.0.0.1:8081/barang')
        .then((res) => {
            console.log(res);
            setBarang(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
  }

    return (
        <>
			<Header />
            <section className="body-inventaris">
                <h1 className="judul-inventaris">Daftar Inventaris</h1>
                <Container>
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
                </Container>
                <Footer />
            </section>            
        </>
    );
};

export default Inventaris;