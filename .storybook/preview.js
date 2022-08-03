import { withThemes } from "@react-theming/storybook-addon";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/Theme";
import GlobalStyles from "../src/styles/GlobalStyle";

addDecorator(withThemes(ThemeProvider, [defaultTheme]));

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
