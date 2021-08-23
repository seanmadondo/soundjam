import { action, makeAutoObservable, observable } from "mobx";
import { Ticket } from "./store.types";
import { TicketData } from "./TicketData";

export class TicketsStore {
  @observable
  tickets: Ticket[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  getTickets = () => {
    TicketData.map((ticket) => this.tickets);
  };
}

const store = new TicketsStore();
export default store;
