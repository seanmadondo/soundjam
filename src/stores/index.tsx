import { makeAutoObservable } from "mobx";

export class soundJamStore {
  client;
  boards;
  tickets;
  isLoading = true;

  constructor(client, boards, tickets, isLoading) {
    makeAutoObservable(this);
  }
}
