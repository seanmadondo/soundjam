/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

import { Box, Card, CardHeader } from "@material-ui/core";

export const Ticket = (): JSX.Element => {
  return (
    <Box>
      <Card css={{ width: "20%", borderRadius: "10px" }}>
        <CardHeader css={{ fontSize: "5px" }} title="Ticket Title" />
      </Card>
    </Box>
  );
};
