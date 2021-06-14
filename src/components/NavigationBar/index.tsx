/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { AppBar, Toolbar } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import dweebLogo from "../../images/dweebLogo.png";

export const NavigationBar = (): JSX.Element => {
  return (
    <AppBar
      css={{ borderRadius: "10px" }}
      position="sticky"
      color="transparent"
    >
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          css={css({
            "img:hover": {
              transform: "rotate(360deg)",
              transition: "transform .9s ease-in-out",
            },
          })}
        >
          <img
            css={css({
              paddingLeft: "15px",
              width: "60px",
              height: "60px",
            })}
            src={dweebLogo}
            alt="logo"
          />
        </div>
        <div css={{ marginLeft: "20px" }}>
          <h1 css={{ fontFamily: "'Baloo 2', cursive" }}>dweeb</h1>
        </div>
        <Toolbar css={{ marginLeft: "68%" }}>
          <AddBoxIcon
            css={css({
              fontSize: "40px !important",
              "&:hover": {
                transform: "scale(1.25)",
                transition: "all 0.2s",
              },
            })}
          />
        </Toolbar>
        <Toolbar>
          <Brightness4Icon
            css={{
              fontSize: "40px !important",
              "&:hover": {
                transform: "scale(1.25)",
                transition: "all 0.2s",
              },
            }}
          />
        </Toolbar>
      </div>
      <div></div>
    </AppBar>
  );
};
