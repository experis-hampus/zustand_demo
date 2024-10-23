"use client";

import Button from "@/components/button";
import PokemonCard from "@/components/pokemon-card";
import usePokemonStore from "./store";
import { useEffect } from "react";

export default function Home() {
  const { inventory, bank, wildPokemon, fetchWildPokemon, catchPokemon } =
    usePokemonStore();

  useEffect(() => {
    fetchWildPokemon();
  }, [fetchWildPokemon]);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl p-8 font-bold">Pokémon Catcher</h1>
      <main className="max-h-[calc(100vh-128px)] grid grid-rows-3 grid-flow-col gap-4 p-8">
        <div className="row-span-3 p-4 rounded-md bg-gray-900">
          <a className="text-2xl font-bold">Wilderness</a>
          {wildPokemon && (
            <PokemonCard name={wildPokemon.name} number={wildPokemon.id} />
          )}
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              onClick={() => {
                catchPokemon();
                fetchWildPokemon();
              }}
              label="Catch"
              variant="primary"
            />
            <Button
              onClick={fetchWildPokemon}
              label="Run"
              variant="secondary"
            />
          </div>
        </div>
        <div className="col-span-2 p-4 rounded-md bg-gray-900">
          <a className="text-2xl font-bold">Inventory</a>
          <div className="grid grid-cols-6 gap-4">
            {inventory.map((pokemon) => (
              <PokemonCard
                size="small"
                key={pokemon.id}
                name={pokemon.name}
                number={pokemon.id}
              />
            ))}
          </div>
        </div>
        <div className="row-span-2 p-4 col-span-2 rounded-md bg-gray-900">
          <a className="text-2xl font-bold">Bank</a>
          <div className="grid grid-cols-6 gap-4">
            {bank.map((pokemon) => (
              <PokemonCard
                size="small"
                key={pokemon.id}
                name={pokemon.name}
                number={pokemon.id}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
