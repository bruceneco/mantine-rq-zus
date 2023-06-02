import toast from "react-hot-toast";
import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

export interface PersistStore {
  example: string;
  saveExample: (v: string) => void;
}
type CredetialPersist = (
  config: StateCreator<PersistStore>,
  options?: PersistOptions<PersistStore>
) => StateCreator<PersistStore>;

export const usePersistStore = create<PersistStore>(
  (persist as CredetialPersist)(
    (set) => ({
      example: "",
      saveExample: (example: string) => {
        toast.success("Exemplo saldo no localStorage");
        set({ example });
      },
    }),
    { name: "persist-store" }
  )
);
