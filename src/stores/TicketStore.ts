import { makeAutoObservable } from "mobx";
import { Ticket } from "./store.types";
import { TicketData } from "./TicketData";

export class TicketStore {
  tickets: Ticket[] = TicketData;
  moves = 0;
  length = this.tickets.length;

  constructor() {
    makeAutoObservable(this);
  }

  public getTickets() {
    return this.tickets;
  }

  public updateMoves(moves: number) {
    this.moves = moves;
  }

  public getMoves() {
    return this.moves;
  }
}
