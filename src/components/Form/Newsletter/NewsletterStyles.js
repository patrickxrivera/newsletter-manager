import styled from 'styled-components';
import { Search } from 'react-feather';

export const Wrapper = styled.div`
  width: 570px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 24px;
  min-height: 280px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 40px;
  margin-top: 18px;
  padding: 6px 14px;
  padding-left: 38px;
  font-size: 16px;
  border: 2px solid #e9ebeb;
  border-radius: 4px;
  background: 0 0;
  &:focus {
    outline: 0;
    border-color: #f6bc00;
    box-shadow: 0 0 1px 0 #f6bc00;
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  color: rgba(14,30,37,.87);
  opacity: .6;
  width: 18px;
  height: 18px;
  margin-left: 12px;
  margin-top: 11px;
  stroke-width: 3;
}
`;

export const NewslettersList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  margin-top: 2rem;
`;

export const PlaceholderText = styled.span`
  margin-top: 2rem;
`;

export const NewslettersListHeading = styled.span`
  margin-bottom: 1rem;
`;

export const subheading = {
  marginTop: '12px'
};
