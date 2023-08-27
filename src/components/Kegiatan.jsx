import React from 'react';
import './Kegiatan.css';
import Header from './Header';
import Footer from './Footer';

function Kegiatan() {
  return (
    <>
      <Header />
      <section class="isi-kegiatan">
        <h1 class="kegiatan">Kegiatan di Masjid Nurul Islam</h1>
        <div class="jenis-kegiatan">
          <h1 class="judul-kegiatan">Taman Pendidikan Al-Qur'an Masjid Nurul Islam</h1>
          <p>“Tumbuhkan Ilmu, Perkokoh Iman: Taman Pendidikan Al-Quran, Cerdas Berakhlak Mulia.”</p>
          <p>Ruang edukasi Al-Quran yang ditujukan untuk pertumbuhan spiritual anak-anak.</p>
          <tr class="tabel">
            <td class="tabel">Hari</td>
            <td class="titik-dua">:</td>
            <td>Selasa - Kamis</td>
          </tr>
          <tr class="tabel">
            <td class="tabel">Waktu</td>
            <td class="titik-dua">:</td>
            <td>16.00-17.30 WIB</td>
          </tr>
          <tr class="tabel">
            <td class="tabel">Tempat</td>
            <td class="titik-dua">:</td>
            <td>Lantai 2 Gedung Serbaguna Masjid Nurul Islam</td>
          </tr>
        </div>
        <div class="jenis-kegiatan">
          <h1 class="judul-kegiatan">Pengajian PKK RW 02</h1>
          <p>“Beriringan dalam Hikmah, Bersama dalam Kebaikan: Menggapai Kedekatan Ilahi melalui Pengajian Rutin.”</p>
          <p>Pengajian rutin satu kali dalam dua pekan untuk anggota PKK dan remaja putri RW 02 Kelurahan Depok Jaya.</p>
          <tr class="tabel">
            <td class="tabel">Hari</td>
            <td class="titik-dua">:</td>
            <td>Jumat (Pekan Genap)</td>
          </tr>
          <tr class="tabel">
            <td class="tabel">Waktu</td>
            <td class="titik-dua">:</td>
            <td>15.30-17.30 WIB</td>
          </tr>
          <tr class="tabel">
            <td class="tabel">Tempat</td>
            <td class="titik-dua">:</td>
            <td>Lantai 1 Masjid Nurul Islam</td>
          </tr>
        </div>
        <div class="jenis-kegiatan">
          <h1 class="judul-kegiatan">Kajian Subuh</h1>
                  <p>Kajian rutin setiap hari Ahad untuk jamaah Masjid Nurul Islam.</p>
          <tr class="tabel">
            <td class="tabel">Hari</td>
            <td class="titik-dua">:</td>
            <td>Ahad (Ba'da Salat Subuh)</td>
          </tr>
          <tr class="tabel">
            <td class="tabel">Waktu</td>
            <td class="titik-dua">:</td>
            <td>05.30-06.30 WIB</td>
          </tr>
          <tr class="tabel">
            <td class="tabel">Tempat</td>
            <td class="titik-dua">:</td>
            <td>Lantai 1 Masjid Nurul Islam</td>
          </tr>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Kegiatan;
