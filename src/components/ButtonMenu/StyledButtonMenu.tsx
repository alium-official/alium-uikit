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
  // background-color: ${getBackgroundColor};
  padding: 10px;
  background: transparent;
  border: 1px solid #D2D6E5;
  border-radius: 6px;
  display: inline-flex;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
