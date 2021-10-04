import React from "react";
import ImgError from '../assets/undraw_page_not_found_su7k.svg';
import { TextStyled, ImgStyled } from "../components/styles/notfound.styles";
import { LinkStyled } from "../components/styles/basics.styles";

interface NotFoundProps {}
interface NotFoundState {}

class NotFound extends React.Component<NotFoundProps, NotFoundState> {
  render() {
    return (
      <TextStyled>
        <div className="items">
          <ImgStyled src={ImgError} alt='Image error 404'></ImgStyled>
          <div className="texts">
            <div className="header">
              PAGE NOT FOUND
            </div>
            <div className='description'>
              La página que estás buscando no existe
            </div>
            <div className="link">
              <LinkStyled to="/">Go Home</LinkStyled>
            </div>
          </div>
        </div>
      </TextStyled>
    );
  }
}

export default NotFound;
