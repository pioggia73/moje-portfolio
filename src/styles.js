import { css } from "styled-components";

export const setColors = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7",
  lightBlue: '#6666ff',
};

export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;"
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x}`;
};

export const setBackground = ({
  img = "https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  color = "rgba(0,0,0,0)"
} = {}) => {
  return `background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover no-repeat`;
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing:${number}px`;
};
export const setShadow = {
  light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
  dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);",
  darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);"
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black"
} = {}) => {
  return `border:${width} ${style} ${color}`;
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const setTransition = ({
  property = "all",
  time = "1s",
  timing = "ease-in-out"
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};


{/*
export default styled(Contact)
`

    .form-container {

    .form-group {
    input,
    textarea {
        font-size: ${setRem(20)};
        padding: ${setRem(20)} ${setRem(40)};
        border-radius: 2px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2px solid #e0e0e0;
        display: block;
       
        &:focus,
        &:focus {
            outline: none;
            border-top: none;
            border-left: none;
            border-right: none;
            ${setShadow()};
            border-bottom: 2px solid #000033;
        }
    
        &:focus:invalid {
            border-bottom: 2px solid #af9a7d !important;

        }
    };   

    input:placeholder-shown + label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);
    }
    
    label {
        font-size: ${setRem(12)};
        margin: ${setRem(10)} 0 0 ${setRem(35)};
        display: block;
       ${setTransition()};
    }
        }
    }
`;
  */}