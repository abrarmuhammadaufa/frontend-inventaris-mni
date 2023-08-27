import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <section className="align-items-center">
        <h1 className="masjid">Masjid Nurul Islam</h1>
        <div className="d-sm-flex mb-5">
          <div className="row">          
            <div className="col-2 col-md-2 align-items-center">
              <img src="logomni.png" class="rounded mx-auto img-fluid" alt="logo" />
            </div>          
            <div className="col-12 col-sm-6 col-md-7 offset-md-1" >
              <p className="lead d-sm-flex">
              Merupakan sebuah masjid yang berlokasi dengan alamat tepat di Jalan Mangga Raya No. 106 A RW 02, Kelurahan Depok Jaya, Kecamatan Pancoran Mas, Kota Depok. Masjid ini menjadi pusat kegiatan keagamaan dan sosial bagi masyarakat setempat.</p>
              <p className="lead">Letak masjid yang berada di sisi jalan raya memberikan kemudahan akses bagi warga sekitar dan orang yang singgah untuk beribadah dan berpartisipasi dalam berbagai kegiatan keagamaan. Sebagai ikon keberagaman dan toleransi, Masjid Nurul Islam tidak hanya menjadi tempat peribadatan, tetapi juga tempat pertemuan dan interaksi antarwarga yang berasal dari berbagai lapisan masyarakat di Kota Depok.</p>
            </div>
          </div>
        </div>    
      </section>
      <Footer />
    </>
  );
}

export default Home;
