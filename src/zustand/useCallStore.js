import { create } from "zustand";

const useCallStore = create((set) => ({
  isCall: false,
  isVideo: false,
  setIsCall: (isCall) => set({ isCall }),
  setIsVideo: (isVideo) => set({ isVideo }),
  clearCall: () => set({ isCall: false, isVideo: false }),
}));

export default useCallStore;
