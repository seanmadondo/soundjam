/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Paper, Box } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { BoardGrid } from "../Board/BoardGrid";

export const Board = (): JSX.Element => {
  return (
    <Box pt={3}>
      <Paper
        css={{ borderRadius: "10px", paddingBottom: "15px" }}
        elevation={2}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3
            css={{
              justifyContent: "flex-start",
              padding: "0px 0px 0px 20px",
              fontFamily: "'Baloo 2', cursive",
            }}
          >
            Level 1
          </h3>
          <div css={{ justifyContent: "flex-end", paddingRight: "30px" }}>
            <HelpIcon
              css={css({
                "&:hover": {
                  transform: "scale(1.25)",
                  transition: "all 0.2s",
                },
              })}
            />
          </div>
        </div>
        <BoardGrid />
      </Paper>
    </Box>
  );
};
