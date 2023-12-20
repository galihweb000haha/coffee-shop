import React, { Component } from 'react';
import { StyledParagraph } from '../components/Paragraph';
import { StyledButton } from '../components/Button';
import { StyledNavLink } from '../components/Link';
import NavbarComponent from "../components/Navbar"
import FooterComponent from "../components/Footer"
// import axios from 'axios';
// import { urls } from '../utils/constants';

export default class Home extends Component {

  componentDidMount() {
   
  }

  render() {
    return (
      <>
      <NavbarComponent/>
      <div style={{padding: '0px 112px'}}>
        <h1>Hai Pecinta Kopi!</h1>
        <div style={{display: 'flex', gap: '80px'}}>
          <div>
            
            <StyledParagraph>
            Selamat datang di KopiKreasi, tempat di mana setiap tegukan adalah sebuah karya seni. Kami dengan bangga menyajikan kepada Anda dunia kopi yang penuh kreasi dan inovasi, di mana biji kopi berkualitas tinggi diubah menjadi karya seni rasa yang unik.
            </StyledParagraph>
            <StyledParagraph>
            Di sini, setiap cangkir kopi tidak hanya merupakan minuman, tetapi juga kisah perjalanan panjang biji kopi dari petani yang penuh dedikasi hingga ke tangan Anda. Kami percaya bahwa kelezatan sejati terletak dalam inovasi dan pencarian terus-menerus akan cita rasa yang belum terjamah.
            </StyledParagraph>
            <StyledParagraph>
            Mari bergabung dalam petualangan rasa kami, menikmati keindahan setiap rasa dan menemukan kenikmatan baru dalam setiap tegukan. Selamat menikmati dan merayakan kopi kreasi kami di KopiKreasi!
            </StyledParagraph>
            
            <StyledNavLink to="/login" ><StyledButton type="primary">Getting Started</StyledButton></StyledNavLink>
            
          </div>
          <img alt="Banner Website Barista" src={process.env.PUBLIC_URL + '/img/undraw_barista_qd50.svg'} />
        </div>
      </div>
      <FooterComponent />
      </>
    );
  }
}
