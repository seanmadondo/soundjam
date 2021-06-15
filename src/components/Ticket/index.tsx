/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@material-ui/core";

export const Ticket = (): JSX.Element => {
  return (
    <Box>
      <Card
        css={{
          width: "20%",
          borderRadius: "10px",
          fontFamily: "'Baloo 2', cursive",
        }}
      >
        <CardHeader title="Ticket Title" disableTypography />
        <CardContent>
          <div>Description to go here</div>
        </CardContent>
        <CardActions>
          <div>Actions to go here</div>
        </CardActions>
      </Card>
    </Box>
  );
};
