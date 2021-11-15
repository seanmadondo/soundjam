/** @jsxImportSource @emotion/react */

import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { useState } from "react";
import J from "../../images/J.png";

interface ticketProps {
  id: number;
  title: string;
  status?: string;
  sound?: string;
}

var OPEN_CARDS_LIST: string[] = [];

const evaluateOpenCards = (cardList: string[]) => {
  return cardList[0] === cardList[1] ? true : false;
};

const setCardState = (color) => {
  //3 states = closed (white), open (orange), complete (green), wrong (red)

  switch (color) {
    case "green":
      return "#00FF00";
    case "red":
      return "ff0000";
    case "open":
      return "#FF914D";
    default:
      return "white";
  }
};

export const Ticket = ({
  id,
  title,
  status,
  sound,
}: ticketProps): JSX.Element => {
  const [cardOpen, setCardOpen] = useState(false);

  //Things to do onclick
  // - change color of clicked card
  // - add id to openCards
  // - allow one more move

  //On 2 clicks
  // add id to openCards
  // - evaluate the 2 cards
  // - reset moves or mark as completed

  const handleCardClick = () => {
    if (OPEN_CARDS_LIST.length < 1 && !OPEN_CARDS_LIST.includes(title)) {
      setCardOpen(!cardOpen);
      OPEN_CARDS_LIST.push(title);
    } else {
      setCardOpen(!cardOpen);
      OPEN_CARDS_LIST.push(title);
      console.log(OPEN_CARDS_LIST);
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
          backgroundColor: cardOpen ? "#FF914D" : "white",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 1px 3px 3px #FF914D",
            transition: "all 0.3s",
          },
        }}
        onClick={handleCardClick}
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
