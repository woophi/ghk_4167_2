import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const mainTitle = style({
  marginTop: '1rem',
  textAlign: 'center',
  maxWidth: '288px',
  alignSelf: 'center',
});
const subtitle = style({
  textAlign: 'center',
  alignSelf: 'center',
});

const dotContainer = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  alignItems: 'center',
  margin: '3rem 0',
});

const frame = style({
  position: 'relative',
});

const imgTree = recipe({
  base: {
    width: '192px',
    height: '192px',
    borderRadius: '50%',
    position: 'absolute',
    left: '14px',
    top: '15px',
    transition: 'all 0.3s ease-in-out',
  },
  variants: {
    grow: {
      0: {
        transform: 'rotate(0deg)',
        backgroundPosition: '-188px -580px',
      },
      1: {
        transform: 'rotate(270deg)',
        backgroundPosition: '-936px -192px',
      },
      2: {
        transform: 'rotate(180deg)',
        backgroundPosition: '-192px -936px',
      },
      3: {
        transform: 'rotate(90deg)',
        backgroundPosition: '-580px -188px',
      },
    },
    tree: {
      green: {
        backgroundImage: 'url(./assets/tree_green.svg)',
      },
      red: {
        backgroundImage: 'url(./assets/tree_red.svg)',
      },
    },
  },
  defaultVariants: {
    tree: 'green',
    grow: 0,
  },
});

const btn = style({
  padding: '1rem',
  borderRadius: '20px',
});

const btnContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  gap: '1rem',
});

const rowSelected = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  border: '2px solid #90AE10',
  padding: '16px',
  borderRadius: '20px',
});
const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  border: '2px solid #F3F4F5',
  padding: '16px',
  borderRadius: '20px',
});

export const appSt = {
  bottomBtn,
  container,
  mainTitle,
  dotContainer,
  subtitle,
  imgTree,
  frame,
  btn,
  btnContainer,
  rowSelected,
  row,
};
