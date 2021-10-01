import React from "react";
import { TextStyled } from '../components/styles/notfound.styles';
import { LinkStyled } from '../components/styles/basics.styles';

interface NotFoundProps {}
interface NotFoundState {}

class NotFound extends React.Component<NotFoundProps, NotFoundState> {
  render() {
    return (
      <TextStyled>
        <div className="items">

         <div className="header">
            <h1>Not Found 404</h1> 
          </div>
          <div className="link">
            <LinkStyled to="/">Go Home</LinkStyled>
          </div>

        </div>
      </TextStyled>
    )
  }
}

export default NotFound;
