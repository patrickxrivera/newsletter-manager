import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  margin-top: 1.5rem;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  z-index: -999;
  height: 80vh;
  width: 100%;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const Headline = styled.div`
  font-size: 50px;
  margin-bottom: 1rem;
  margin-top: 13rem;
`;

export const Description = styled.div`
  font-size: 25px;
  opacity: 0.8;
  margin-top: 0.5rem;
`;

export const primaryButton = {
  marginTop: '2rem',
  color: '#fff',
  backgroundColor: '#34a853',
  height: '50px'
};
