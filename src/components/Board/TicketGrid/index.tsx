/** @jsxImportSource @emotion/react */
import { Container } from "@material-ui/core";
import { Ticket } from "../../Ticket";
import { useRootStore } from "../../../stores/RootStateContext";
import { useEffect, useState, useRef } from "react";
import { Howl, Howler } from "howler";

//============= Radomiser functions =================
// function swap(ticketList, i, j) {
//   const temp = ticketList[i];
//   ticketList[i] = ticketList[j];
//   ticketList[j] = temp;
// }

// function shuffle(ticketList, length) {
//   for (let i = length; i > 0; i--) {
//     const randomIndex = Math.floor(Math.random() * i);
//     const currentIndex = i - 1;
//     swap(ticketList, currentIndex, randomIndex);
//   }
//   return ticketList;
// }
//====================================================

const kick = require("../../../sounds/kick.wav");

export const TicketGrid = () => {
  const ticketStore = useRootStore();

  useEffect(() => {
    ticketStore.ticketStore.getMoves();
  }, [ticketStore]);

  //const ticketCount = ticketStore.ticketStore.length;
  const ticketList = ticketStore.ticketStore.getTickets();
  const movesDisplay = ticketStore.ticketStore.getMoves();

  const [tickets, setTickets] = useState(ticketList);
  const [openTickets, setOpenTickets] = useState<number[]>([]);
  const [completedTickets, setCompletedTickets] = useState({});
  const [moves, setMoves] = useState(movesDisplay);
  const timeout = useRef<number>(0);

  //check if both the cards have the same type
  const evaluate = () => {
    const [first, second] = openTickets;
    if (
      tickets[first].title === tickets[second].title &&
      tickets[first].id !== tickets[second].id
    ) {
      tickets[first].status = "completed";
      tickets[second].status = "completed";
      setCompletedTickets((prev) => ({
        ...prev,
        [tickets[first].title]: true,
      }));
      setOpenTickets([]);
      return;
    }

    setOpenTickets([]);
    clearTimeout(timeout.current);
  };

  const checkIsOpen = (id) => {
    return openTickets.includes(id);
  };

  const checkIsCompleted = (ticket) => {
    return Boolean(completedTickets[ticket.title]);
  };

  const handleClick = (ticket) => {
    const sound = new Howl({
      src: [kick],
    });
    sound.play();
    if (checkIsCompleted(ticket) !== true) {
      if (openTickets.length === 1) {
        setOpenTickets((prev) => [...prev, ticket.id]);
        setMoves((moves) => moves + 1);
        ticketStore.ticketStore.updateMoves(moves + 1);
      } else {
        setOpenTickets([ticket.id]);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (openTickets.length === 2) {
      setTimeout(evaluate, 500);
    }
  }, [openTickets]);

  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {tickets.map((ticket) => (
        <div key={ticket.id} onClick={() => handleClick(ticket)}>
          <Ticket
            id={ticket.id}
            title={ticket.title}
            status={ticket.status}
            sound={ticket.sound}
            isOpen={checkIsOpen(ticket.id)}
          />
        </div>
      ))}
    </Container>
  );
};
