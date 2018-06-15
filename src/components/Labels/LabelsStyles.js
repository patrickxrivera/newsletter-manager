import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgb(233, 235, 238);
  height: 100vh;
  width: 100vw;
`;

export const InnerWrapper = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
`;

export const TilesWrapper = styled.div`
  margin: 2rem 6rem;
`;

export const Tile = styled.div`
  height: 200px;
  width: 200px;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12), 0 5px 15px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TileTitle = styled.span`
  font-size: 1.4rem;
  display: block;
  text-align: center;
  margin: 2rem 0 1rem;
`;

export const TileDescription = styled.span`
  color: rgba(14, 30, 37, 0.5);
  text-align: center;
  display: block;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  color: #0984e3;
`;

export const primaryButton = {
  color: '#fff',
  backgroundColor: '#0984e3',
  height: '20px',
  width: '75px'
};
