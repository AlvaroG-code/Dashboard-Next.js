"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemon = () => {
    const favoritePokemons = useAppSelector((state) =>
        Object.values(state.pokemon.favorites)
    );
    const [pokemons, setPokemons] = useState(favoritePokemons);

    return (
        <>
            {pokemons.length === 0 ? (
                <NoFavorites />
            ) : (
                <PokemonGrid pokemons={pokemons} />
            )}
        </>
    );
};

export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-400" />
            <span className="text-2xl text-gray-400">No hay favoritos</span>
        </div>
    );
};
