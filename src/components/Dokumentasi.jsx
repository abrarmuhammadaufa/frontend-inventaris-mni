import React from 'react';
import './Dokumentasi.css';
import Header from './Header';
import Footer from './Footer';

function Dokumentasi() {
  return (
    <>
      <Header />
      <div class="container-dokum">
        <div class="jenis-dokumentasi">
          <h1 class="Dokumentasi">Pengajian PKK RW 02</h1>
          <div class="d-sm-flex mb-5">
            <div class="row">          
              <div class="col-4 align-items-center">
                <img src="logomni.png" class="rounded mx-auto d-block img-fluid" alt="logo" />
              </div>
              <div class="col-4 align-items-center">
                <img src="logomni.png" class="rounded mx-auto d-block img-fluid" alt="logo" />
              </div>    
              <div class="col-4 align-items-center">
                <img src="logomni.png" class="rounded mx-auto d-block img-fluid" alt="logo" />
              </div>   
            </div>
          </div>
        </div>
        <div className="jenis-dokumentasi">
          <h1 class="Dokumentasi">Taman Pendidikan Al-Qur'an Masjid Nurul Islam</h1>
            <div class="d-sm-flex mb-5">
              <div class="row">          
                <div class="col-4 align-items-center">
                  <img src="logomni.png" class="rounded mx-auto d-block img-fluid" alt="logo" />
                </div>
                <div class="col-4 align-items-center">
                  <img src="logomni.png" class="rounded mx-auto d-block img-fluid" alt="logo" />
                </div>    
                <div class="col-4 align-items-center">
                  <img src="logomni.png" class="rounded mx-auto d-block img-fluid" alt="logo" />
                </div>   
              </div>
            </div>        
          </div>
        </div>
      <Footer />
    </>
    
  );
}

export default Dokumentasi;
