import styled from 'styled-components';

import media from '../../utils/mediaTemplate';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 1rem 1rem 0;
  padding-bottom: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(222, 224, 229);

  ${media.phone`flex-direction: column`};
`;

export const Title = styled.div`
  font-size: 26px;

  ${media.phone`font-size: 18px`};
  ${media.phone`margin-bottom: 1rem`};
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  padding: 0 1.2rem;
  margin: 0 1.25rem;
  height: 1.2px;
  background-color: #ddd;
  transform: rotate(90deg);

  ${media.phone`margin: 0`};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: rgba(14, 30, 37, 0.5);
  font-size: 15px;
  font-weight: 500;
  margin-left: 1.4rem;

  &:hover {
    color: inherit;
    transition: 150ms 10ms ease;
  }
`;

export const StyledLinkTitle = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

export const activeLink = {
  color: 'rgb(66, 66, 65)'
};

export const secondaryButton = {
  color: '#34a853',
  border: '2px solid #34a853',
  backgroundColor: '#fff'
};
