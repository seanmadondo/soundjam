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
  id: number;
  title: string;
  status?: string;
  sound?: string;
  isOpen?: boolean;
}

export const Ticket = ({
  id,
  title,
  status,
  sound,
  isOpen,
}: ticketProps): JSX.Element => {
  const switchColorByState = (state) => {
    switch (state) {
      case "completed":
        return "#BABABA";
      case "incorrect":
        return "ff0000";
      case "open":
        return "#FAB588";
      default:
        return "white"; //default state
    }
  };

  return (
    <Box>
      <Card
        css={{
          width: "225px",
          borderRadius: "10px",
          fontFamily: "Baloo 2",
          marginLeft: "10px",
          marginBottom: "10px",
          backgroundColor: isOpen ? "#FAB588" : switchColorByState(status),
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

//Things to do onclick
// - change color of clicked card
// - add id to openCards
// - allow one more move

//On 2 clicks
// add id to openCards
// - evaluate the 2 cards
// - reset moves or mark as completed
