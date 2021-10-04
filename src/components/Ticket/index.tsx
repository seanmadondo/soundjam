/** @jsxImportSource @emotion/react */

import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@material-ui/core";

import J from "../../images/J.png";

interface ticketProps {
  title: string;
  status: string;
  sound: string;
}

export const Ticket = ({ title, status, sound }: ticketProps): JSX.Element => {
  return (
    <Box>
      <Card
        css={{
          width: "225px",
          borderRadius: "10px",
          fontFamily: "Baloo 2",
          marginLeft: "10px",
          marginBottom: "10px",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 1px 3px 3px #FF914D",
            transition: "all 0.3s",
          },
        }}
      >
        <CardHeader title="" disableTypography />
        <CardContent>
          <img
            css={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "40x",
              height: "40px",
            }}
            src={J}
            alt="J"
          />
        </CardContent>
        <CardActions>{title}</CardActions>
      </Card>
    </Box>
  );
};
