/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { AppBar, Toolbar } from "@material-ui/core";

import SoundJam from "../../images/SoundJam.png";

interface NavigationBarProps {
  moves: number;
}

export const NavigationBar = ({ moves }: NavigationBarProps): JSX.Element => {
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
          justifyContent: "space-around",
        }}
      >
        <div
          css={css({
            "img:hover": {
              transform: "scale(1.1)",
              transition: "all 0.2s",
              justifyContent: "flex-start",
            },
          })}
        >
          <img
            css={css({
              paddingLeft: "15px",
              width: "215px",
              height: "105px",
            })}
            src={SoundJam}
            alt="SoundJam"
          />
        </div>

        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Toolbar>
            <div
              css={{
                fontFamily: "'Baloo 2', cursive",
              }}
            >
              Moves:
            </div>
          </Toolbar>
          <Toolbar>
            <div
              css={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: "50px",
              }}
            >
              {moves}
            </div>
          </Toolbar>
        </div>
      </div>
    </AppBar>
  );
};
