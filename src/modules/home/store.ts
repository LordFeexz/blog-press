import { create } from "zustand";

export interface InitialState {
  referalCode: string;
  setReferralCode: (code: string) => void;
}

const useEarlyBirdPageStore = create<InitialState>((set) => ({
  referalCode: "",
  setReferralCode: (referalCode) => set({ referalCode }),
}));

export default useEarlyBirdPageStore;
