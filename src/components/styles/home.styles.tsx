import styled from "styled-components";

/**** PROPS ****/
interface Props {
  bg: string
}

/**
 * 
 * BANNER COMPONENTS
 * 
 */
export const Banner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #411E5F;
  padding: 2.7rem;
  align-items: center;
  text-align: center;
  justify-content: center;

  h1 {
    font-size: 3em;
  }

  @media screen and (max-width: 989px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }
`;

export const ImgBanner = styled.img`
  width: 484px;
  height: 454px;
  border-radius: 10px;

  @media screen and (max-width: 989px) {
    width: 200px;
    height: 200px;
  }
`;


/**
 * 
 * BODY TEXT CONTENT
 * 
 */

export const TextBody = styled.div`
  background: ${(props: Props) => props.bg || "red"};
  padding: 30px;  

  .header {
    font-size: 2.7rem;
    text-align: center;
  }

  @media screen and (max-width: 989px) {
    padding: 30px;  

    .header {
      font-size: 1.6rem;
    }
  }
  
  `;

export const BodyText = styled.div`
  padding: 4rem;
  margin-top: 2rem;

  .body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 989px) {
    padding: 1rem;
  }



`;

