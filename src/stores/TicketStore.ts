import { action, makeAutoObservable, observable } from "mobx";
import { Ticket } from "./store.types";
//import { TicketData } from "./TicketData";

export class TicketStore {
  tickets: Ticket[] = [
    {
      id: 0,
      title: "kick",
      status: "todo",
      sound: "",
    },
    {
      id: 1,
      title: "snare",
      status: "todo",
      sound: "",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  // async getTickets() {
  //   return this.tickets;
  // }
}
