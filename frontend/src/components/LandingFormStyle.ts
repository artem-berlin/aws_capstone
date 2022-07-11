import styled from 'styled-components';
import foto from '../assets/foto.jpg';

export const Container = styled.div`
  height: 100%;

  section {
    width: 100%;

    h2 {
      text-align: center;
      font-size: 26px;
      font-family: 'Comfortaa';
      font-weight: 600;
      padding: 40px 15px 0;

      strong {
        display: block;
        font-size: 18px;
        font-weight: 300;
        margin-top: 5px;
        padding: 0px 5px;
      }
    }

    .description {
      font-size: 16px;
      font-weight: 300;
      padding: 0 25px;
      margin: 10px auto;
      text-align: center;
      line-height: 1.3;
      max-width: 500px;
    }

    @media screen and (min-width: 1023px) {
      h2 {
        font-size: 30px;

        strong {
          font-size: 24px;
        }
      }

      .description {
        font-size: 20px;
        max-width: 750px;
      }
    }

    @media screen and (min-width: 1279px) {
      h2 {
        font-size: 40px;

        strong {
          font-size: 28px;
        }
      }

      .description {
        font-size: 22px;
        max-width: 750px;
      }
    }
  }
`;



export const SectionCarrer = styled.section`
  .wrapper {
    margin: auto;
    max-width: 1280px;

    .foto {
      margin: 50px 0px;

      img {
        width: 60%;
        max-width: 350px;
        margin: auto;
        display: block;
      }
    }
  }

  @media screen and (min-width: 1023px) {
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;

      div {
        width: 50%;
      }

      p {
        width: 50%;
        text-align: left;
      }
    }
  }
`;

export const SectionMedia = styled.section``;
