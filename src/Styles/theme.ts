import {
  Theme,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

let theme: Theme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        textTransform: "none",
      },
    },
  },
});

// generate responsive typography settings
theme = responsiveFontSizes(theme);

export default theme;
