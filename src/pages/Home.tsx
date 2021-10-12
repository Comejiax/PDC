import React from 'react';
import '../css/home.css';
import PanitasDevImg from '../assets/panitasdev.png';
import WelcomeImg from '../assets/flat_character_illustrations.svg';

import { ImgBanner, Banner, TextBody } from '../components/styles/home.styles';

interface HomeProps {}
interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div className="home">
        {/*---- BANNER ----*/}
        <Banner>
          <div>
            <ImgBanner src={PanitasDevImg}></ImgBanner>
          </div>
          <div className="text">
            <h1>PANITAS DEVELOPERS COMMUNITY</h1>
          </div>
        </Banner>
        {/*---- END BANNER ----*/}

        {/*---- BODY TEXT ----*/}
        <div className='body-text'>
          <TextBody bg="#5c2c86" className="text1 section-text">
            <div className="header">
              <span>BIENVENIDOS A PANITAS DEVELOPERS COMMUNITY</span>
            </div>
            <div className="body">
              <div className="text">
                Panitas Developers Community es una comunidad de discord que
                inició el 29 de diciembre del año 2020. Inició siendo una
                pequeña comunidad para el desarrollo de nuestros proyectos, pero
                tiempo después se convirtió en una comunidad centrada a la
                programación. Creada por Chandler y por Comejiax cuando tenían
                una idea para desarrollar un videojuego entre varias personas
                dentro de una comunidad, de ahí salió Panitas Developers, ahora
                esa idea con la que se inició ya no está, ahora es una comunidad
                de programadores y no un grupo de integrantes de un proyecto
                indie.
              </div>
              <div className="image">
                <img src={WelcomeImg} alt="img" />
              </div>
            </div>
          </TextBody>

          <TextBody bg="#4f2772" className="text1">
            <div className="header">
              NUESTRO OBJETIVO
            </div>
          </TextBody>

        </div>
      </div>
    );
  }
}
export default Home;
