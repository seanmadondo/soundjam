import { gql } from "@apollo/client";

export const newBoardMutation = gql`
  mutation putBoard($organisationId: ID!, $boardId: ID, $input: BoardInput!) {
    putBoard(
      organisationId: $organisationId
      boardId: $boardId
      input: $input
    ) {
      id
      name
    }
  }
`;

export const putTicketMutation = gql`
  mutation putTicket(
    $organisationId: ID!
    $boardId: ID!
    $ticketId: ID
    $input: TicketInput!
  ) {
    putTicket(
      organisationId: $organisationId
      boardId: $boardId
      ticketId: $ticketId
      input: $input
    ) {
      id
      name
      description
      status
      visible
    }
  }
`;

export const updateTicketMutation = gql`
  mutation putTicket(
    $organisationId: ID!
    $boardId: ID!
    $ticketId: ID
    $input: TicketInput!
  ) {
    putTicket(
      organisationId: $organisationId
      boardId: $boardId
      ticketId: $ticketId
      input: $input
    ) {
      id
      name
      description
      status
      visible
    }
  }
`;

export const deleteTicketMutation = gql`
  mutation deleteTicket($organisationId: ID!, $ticketId: ID!) {
    deleteTicket(organisationId: $organisationId, ticketId: $ticketId) {
      id
      name
      description
      status
      visible
    }
  }
`;
