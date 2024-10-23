import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Pokemon {
  id: number;
  name: string;
}

interface PokemonStore {
  inventory: Pokemon[];
  bank: Pokemon[];
  wildPokemon: Pokemon | null;
  fetchWildPokemon: () => Promise<void>;
  catchPokemon: () => void;
}

const usePokemonStore = create<PokemonStore>()(
  persist(
    (set, get) => ({
      inventory: [],
      bank: [],
      wildPokemon: null,
      fetchWildPokemon: async () => {
        const randomId = Math.floor(Math.random() * 151) + 1;
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        const data = await response.json();
        console.log(data);

        set({ wildPokemon: { id: data.id, name: data.name } });
      },
      catchPokemon: () => {
        const { inventory, bank, wildPokemon } = get();
        if (!wildPokemon) return;

        if (inventory.length < 6) {
          set({ inventory: [...inventory, wildPokemon] });
        } else {
          set({ bank: [...bank, wildPokemon] });
        }
        set({ wildPokemon: null });
      },
    }),
    {
      name: "pokemon-storage",
    }
  )
);

export default usePokemonStore;
