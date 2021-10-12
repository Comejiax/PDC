import styled from "styled-components";

/**** PROPS ****/
interface Props {
  bg: string;
}

/**
 *
 * BANNER COMPONENTS
 *
 *
 */

/**
 *
 * BANNER COMPONENTS
 *
 */
export const Banner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #411e5f;
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

/*
 *
 * BODY TEXT CONTENT
 *
 */
export const TextBody = styled.div`
  background: ${(props: Props) => props.bg || "red"};
`;
