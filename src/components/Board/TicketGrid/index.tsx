/** @jsxImportSource @emotion/react */
import { Container } from "@material-ui/core";
import { Ticket } from "../../Ticket";

import { useRootStore } from "../../../stores/RootStateContext";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

//============= Radomiser functions =================
function swap(ticketList, i, j) {
  const temp = ticketList[i];
  ticketList[i] = ticketList[j];
  ticketList[j] = temp;
}

function shuffle(ticketList, length) {
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(ticketList, currentIndex, randomIndex);
  }
  return ticketList;
}
//====================================================

export const TicketGrid = observer(() => {
  const ticketStore = useRootStore();

  useEffect(() => {
    ticketStore.ticketStore.getTickets();
    ticketStore.ticketStore.getScore();
  }, [ticketStore]);

  const ticketCount = ticketStore.ticketStore.length;
  const ticketList = shuffle(ticketStore.ticketStore.getTickets(), ticketCount);

  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {ticketList.map((ticket) => (
        <Ticket
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          status={ticket.status}
          sound={ticket.sound}
        />
      ))}
    </Container>
  );
});
