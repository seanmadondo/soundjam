/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Paper, Box, Container } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { Ticket } from "../Ticket";

export const Board = (): JSX.Element => {
  return (
    <Box pt={3}>
      <Paper css={{ height: "300px", borderRadius: "10px" }} elevation={2}>
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
            Board title here
          </h3>
          <div css={{ justifyContent: "flex-end", paddingRight: "30px" }}>
            <AddCircleIcon
              css={css({
                "&:hover": {
                  transform: "scale(1.25)",
                  transition: "all 0.2s",
                },
              })}
            />
          </div>
        </div>
        <Container>
          <Ticket />
        </Container>
      </Paper>
    </Box>
  );
};
