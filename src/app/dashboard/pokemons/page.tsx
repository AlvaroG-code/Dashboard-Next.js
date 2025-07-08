import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemons";
import { Pokemonresponse } from "@/pokemons/interfaces/pokemons-response";
import Image from "next/image";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { notFound } from "next/navigation";

const getPokemons = async (
    limit = 20,
    offset = 0
): Promise<SimplePokemon[]> => {
    const data: Pokemonresponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((res) => res.json());

    const pokemons = data.results.map((pokemon) => ({
        id: pokemon.url.split("/").at(-2)!,
        name: pokemon.name,
    }));

    // throw new Error("Esto es un error de prueba");
    // throw notFound();

    return pokemons;
};

export default async function PokemonsPage() {
    const Pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">
                Listado de Pokémons <small>estático</small>
            </span>

            <PokemonGrid pokemons={Pokemons} />
        </div>
    );
}
