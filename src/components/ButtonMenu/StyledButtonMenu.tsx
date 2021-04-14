import styled, { DefaultTheme } from "styled-components";
import { Variants, variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variants;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const StyledButtonMenu = styled.div<{ variant: Variants }>`
  background: #F4F5FA;
  padding: 10px;
  border: 1px solid #D2D6E5;
  border-radius: 6px;
  display: inline-flex;

  & > button + button,
  & > a + a {
    letter-spacing: 0;
    margin-left: 8px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
