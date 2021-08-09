/** @jsxImportSource @emotion/react */
import { Container } from "@material-ui/core";
import { Ticket } from "../../Ticket";

export const BoardGrid = () => {
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
};
