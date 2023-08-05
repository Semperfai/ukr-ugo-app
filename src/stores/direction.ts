import { defineStore } from "pinia";
interface State {
  pickup: string;
  destination: string;
}
export const useDirectionStore = defineStore("direction", {
  state: (): State => ({
    pickup: "",
    destination: "",
  }),
  actions: {},
  persist: true,
});
