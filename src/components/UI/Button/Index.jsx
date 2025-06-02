import styled, { css } from "styled-components";

// const colors = {
//   primary: "#4361ee",
//   secondary: "#b5179e",
// };

// const sizes = {
//   sm: {
//     fontSize: "0.8rem",
//     padding: "0.2rem 0.5rem",
//   },
//   md: {
//     fontSize: "1rem",
//     padding: "0.5rem 1rem",
//   },
//   lg: {
//     fontSize: "1.3rem",
//     padding: "0.5rem 1rem",
//   },
// };

const Button = styled.button`
  padding: 0.8 rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  background-color: ${({ variant, theme }) =>
    theme.colors[variant] || theme.colors.primary};

  ${({ size = "md", theme }) => css`
    font-size: ${theme.button[size].fontSize};
    padding: ${theme.button[size].padding};
  `}

  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
`;
export default Button;
