import styled from 'styled-components';
import Checkbox from 'material-ui/Checkbox';
import Button from '@material-ui/core/Button';

import media from '../../../utils/mediaTemplate';

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 24px 24px 9px;
  min-height: 280px;
  width: 570px;
  margin: 0 auto 1rem;

  ${media.tablet`width: 90%`};
  ${media.tablet`margin-bottom: 2rem`};
`;

export const CheckboxIcon = styled(Checkbox)`
  margin-top: 0.8rem;
`;

export const CheckboxWrapper = styled.div`
  padding-top: 1.5rem;
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
  height: 240px;
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
  color: '#fff',
  backgroundColor: '#34a853',
  height: '40px',
  width: '200px'
};

export const title = {
  borderBottom: '2px solid #f5f7f9',
  paddingBottom: '10px'
};
