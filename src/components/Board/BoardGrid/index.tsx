/** @jsxImportSource @emotion/react */
import { Container } from "@material-ui/core";
import { Ticket } from "../../Ticket";

import { useRootStore } from "../../../stores/RootStateContext";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const BoardGrid = observer(() => {
  const ticketStore = useRootStore();

  useEffect(() => {
    const the_tickets = ticketStore.ticketStore.tickets.map(
      (ticket) => ticket.title + ""
    );
    console.log(the_tickets);
  }, [ticketStore]);

  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </Container>
  );
});
