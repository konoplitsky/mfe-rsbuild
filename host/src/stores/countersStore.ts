import { create, type UseBoundStore } from 'zustand';
import { StoreApi } from 'zustand'

type CounterState = {
  counter: number;
  increment: () => void;
};

declare global {
  interface Window {
    [GLOBAL_STORE_KEY]: UseBoundStore<StoreApi<CounterState>>;
  }
}

const GLOBAL_STORE_KEY = '__GLOBAL_COUNTERS_STORE__';


const useCounterStore = window[GLOBAL_STORE_KEY] ?? create<CounterState>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
}));

if (!window[GLOBAL_STORE_KEY]) {
  window[GLOBAL_STORE_KEY] = useCounterStore;
}

export { useCounterStore };
export default useCounterStore;
