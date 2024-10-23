"use client";

import React from "react";
import Image from "next/image";

function PokemonCard({
  name = "Bulbasaur",
  number = "#001",
  size = "medium",
}: {
  name?: string;
  number?: string;
  size?: "small" | "medium" | "large";
}) {
  const dimensions = {
    small: { width: 100, height: 100 },
    medium: { width: 300, height: 300 },
    large: { width: 400, height: 400 },
  };

  const { width, height } = dimensions[size];

  return (
    <div className={`pokemon-card ${size}`}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/home/1.png`}
        alt={`Pokemon`}
        width={width}
        height={height}
        className="mx-auto mb-4"
      />
      <div className="text-center">
        <h2
          className={`font-bold mb-2 ${
            size === "small"
              ? "text-lg"
              : size === "medium"
              ? "text-2xl"
              : "text-3xl"
          }`}
        >
          {name}
        </h2>
        <p
          className={
            size === "small"
              ? "text-sm"
              : size === "medium"
              ? "text-lg"
              : "text-xl"
          }
        >
          {number}
        </p>
      </div>
    </div>
  );
}

export default PokemonCard;
