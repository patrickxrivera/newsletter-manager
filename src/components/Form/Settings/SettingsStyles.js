import styled from 'styled-components';
import Checkbox from 'material-ui/Checkbox';
import Button from '@material-ui/core/Button';
import { Search } from 'react-feather';

export const Wrapper = styled.div`
  width: 570px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 24px;
  min-height: 270px;
`;

export const CheckboxIcon = styled(Checkbox)`
  margin-top: 1rem;
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

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Btn = styled(Button)``;

export const textField = {
  underlineFocusStyle: {
    borderColor: '#34a853'
  },
  floatingLabelFocusStyle: {
    color: '#34a853'
  }
};

export const checkbox = {
  fill: '#34a853'
};

export const primaryButton = {
  marginTop: '3rem',
  color: '#fff',
  backgroundColor: '#34a853',
  height: '40px',
  width: '200px'
};
