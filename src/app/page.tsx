"use client";

import Button from "@/components/button";
import PokemonCard from "@/components/pokemon-card";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl p-8 font-bold">Pokémon Catcher</h1>
      <main className="max-h-[calc(100vh-128px)] grid grid-rows-3 grid-flow-col gap-4 p-8">
        <div className="row-span-3 p-4 rounded-md bg-gray-900">
          <a className="text-2xl font-bold">Wilderness</a>
          <PokemonCard />
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              onClick={() => {
                console.log("Catch");
              }}
              label="Catch"
              variant="primary"
            />
            <Button
              onClick={() => {
                console.log("Run");
              }}
              label="Run"
              variant="secondary"
            />
          </div>
        </div>
        <div className="col-span-2 p-4 rounded-md bg-gray-900">
          <a className="text-2xl font-bold">Inventory</a>
          <div className="grid grid-cols-6 gap-4">
            <PokemonCard size="small" />
            <PokemonCard size="small" />
            <PokemonCard size="small" />
            <PokemonCard size="small" />
            <PokemonCard size="small" />
            <PokemonCard size="small" />
          </div>
        </div>
        <div className="row-span-2 p-4 col-span-2 rounded-md bg-gray-900">
          <a className="text-2xl font-bold">Bank</a>
          <div className="grid grid-cols-6 gap-4">
            <PokemonCard size="small" />
            <PokemonCard size="small" />
            <PokemonCard size="small" />
            <PokemonCard size="small" />
            <PokemonCard size="small" />
            <PokemonCard size="small" />
          </div>
        </div>
      </main>
    </div>
  );
}
