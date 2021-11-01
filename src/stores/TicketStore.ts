import { makeAutoObservable } from "mobx";
import { Ticket } from "./store.types";
import { TicketData } from "./TicketData";

export class TicketStore {
  tickets: Ticket[] = TicketData;
  score = 0;
  length = this.tickets.length;

  constructor() {
    makeAutoObservable(this);
  }

  getTickets() {
    return this.tickets;
  }

  getScore() {
    return this.score;
  }
}
