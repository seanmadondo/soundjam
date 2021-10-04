import { action, makeAutoObservable } from "mobx";
import { Ticket } from "./store.types";
import { TicketData } from "./TicketData";

export class TicketStore {
  tickets: Ticket[] = TicketData;
  score = 0;
  length = this.tickets.length;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  getTickets() {
    return this.tickets;
  }

  @action
  getScore() {
    return this.score;
  }
}
