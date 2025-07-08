import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemons";
import { Pokemonresponse } from "@/pokemons/interfaces/pokemons-response";
import Image from "next/image";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { notFound } from "next/navigation";
import { FavoritePokemon } from "@/pokemons/components/FavoritePokemon";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
    title: "Pokémons Favoritos",
    description: "Listado de Pokémons favoritos",
};

export default async function PokemonsPage() {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">
                Pokémons Favoritos <small>Global State</small>
            </span>

            {/* <PokemonGrid pokemons={[]} /> */}
            <FavoritePokemon />
        </div>
    );
}
