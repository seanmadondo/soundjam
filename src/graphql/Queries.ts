import { gql } from "@apollo/client";

export const getBoardsQuery = gql`
  query organisation($organisationId: ID!) {
    organisation(organisationId: $organisationId) {
      id
      name
      timezone
      createdAt
      updatedAt
      boards {
        id
        name
        tickets {
          id
          name
          description
          status
          visible
        }
      }
    }
  }
`;

export const getTicketsQuery = gql`
  query board($organisationId: ID!, $boardId: ID!) {
    board(organisationId: $organisationId, boardId: $boardId) {
      id
      name
      createdAt
      updatedAt
      tickets {
        id
        name
        description
        status
      }
    }
  }
`;
