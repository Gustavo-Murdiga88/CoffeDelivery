import "styled-components";
import { DefaultTheme } from "../style/theme";

type ThemeDefault = typeof DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeDefault {}
}
