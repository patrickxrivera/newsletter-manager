import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Wrapper = styled.div`
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
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
  font-size: 45px;
  margin-bottom: 1rem;
  margin-top: 17rem;
`;

export const Description = styled.div`
  font-size: 30px;
  opacity: 0.9;
  margin-top: 0.5rem;
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export const Text = styled.span`
  margin-right: 8px;
`;

export const Btn = styled(Button)``;

export const primaryButton = {
  marginTop: '2rem',
  color: '#fff',
  backgroundColor: '#34a853',
  height: '60px',
  width: '265px',
  background: 'linearGradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'
};
