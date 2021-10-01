import React from 'react';
import PanitasDevImg from '../assets/panitasdev.png';

import { ImgBanner, Banner, BodyText, TextBody } from '../components/styles/home.styles';

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
        <BodyText>

          <TextBody bg="#5c2c86" className="text1">
            <div className="header">
              <span>
                BIENVENIDOS A PANITAS DEVELOPERS COMMUNITY
              </span>
            </div>
            <div className="body">
              
            </div>
          </TextBody>

          <TextBody bg="#4f2772" className="text1">
            <div className="header">
              NUESTRO OBJETIVO
            </div>
          </TextBody>

        </BodyText>
        {/*---- END BODY TEXT ----*/}

        

      </div>
    );
  }
}
 
export default Home;
