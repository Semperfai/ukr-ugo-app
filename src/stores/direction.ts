import { defineStore } from "pinia";
interface State {
  pickup: string | null;
  destination: string | null;
}
export const useDirectionStore = defineStore("direction", {
  state: (): State => ({
    pickup: null,
    destination: null,
  }),
  actions: {},
  persist: true,
});
