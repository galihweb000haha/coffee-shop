import React, { Component } from 'react';
import { StyledParagraph } from '../components/Paragraph';
import Header from '../components/Header';
import NavbarComponent from "../components/Navbar"
import FooterComponent from "../components/Footer"

export default class About extends Component {

  componentDidMount() {
   
  }

  render() {
    return (
      <>
      <NavbarComponent/>
      <div>
        <Header title='Tentang Kami'/>
      
        <div style={{padding: '0px 112px'}}>
          
          <StyledParagraph>
          KopiKreasi adalah perusahaan kopi yang lahir dari cinta akan cita rasa kopi yang otentik dan atmosfer santai. Didirikan pada tahun 2010, kami telah berdedikasi untuk menciptakan pengalaman kopi yang menggoda selera dan menyenangkan hati pelanggan kami. KopiKreasi hanya menggunakan biji kopi berkualitas tinggi dari perkebunan terpilih, menjamin secangkir kopi yang luar biasa setiap kali. KopiKreasi hanya menggunakan biji kopi berkualitas tinggi dari perkebunan terpilih, menjamin secangkir kopi yang luar biasa setiap kali. Tim ahli kami terus mengeksplorasi dan menciptakan kombinasi rasa yang unik, menjadikan KopiKreasi sebagai tempat eksperimen rasa kopi terbaik. Kami berusaha memberikan pengalaman pelanggan yang hangat dan memuaskan, menjadikan setiap kunjungan ke KopiKreasi sebagai momen istimewa.
          </StyledParagraph>
        
          <center>
            <img alt="Banner Website Barista" src={process.env.PUBLIC_URL + '/img/nathan-dumlao-6VhPY27jdps-unsplash.jpg'} style={{backgroundSize: 'cover', width: '50%', }}/>
          </center>
          
          <StyledParagraph>
          Misi KopiKreasi adalah menghadirkan kebahagiaan melalui secangkir kopi, sambil mendukung keberlanjutan, meningkatkan kesejahteraan petani kopi, dan menjadi bagian dari komunitas yang peduli.
          </StyledParagraph>

          <StyledParagraph>
          <h1>Kontak Kami</h1>
          <ul>
            <li>Alamat: Jl. Kesejahteraan No. 10, Kota Baru</li>
            <li>Telepon: (021) 1234-5678</li>
            <li>Email: info@kopikreasi.com</li>
            <li>Website: www.kopikreasi.com</li>
          </ul>
          </StyledParagraph>

        </div>
      </div>
      <FooterComponent/>
      </>
    );
  }
}
