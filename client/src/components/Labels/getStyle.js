import { pipe } from 'ramda';

const getStyle = (idx) => pipe(getColor, applyStyle)(idx);

const getColor = (idx) => colors[idx % colors.length];

const colors = ['#0984e3', '#ff7675', '#00cec9', '#a29bfe', '#00b894', '#6c5ce7'];

const applyStyle = (color) => ({
  floatingBtn: {
    borderColor: color
  },
  icon: {
    fill: color
  },
  primaryBtn: {
    backgroundColor: color
  }
});

export default getStyle;
