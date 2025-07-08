import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
    favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonState => {
//     const favorites = JSON.parse(localStorage.getItem("favorites") ?? "{}");

//     return favorites;
// };

const initialState: PokemonState = {
    favorites: {},
    // ...getInitialState(),
    // "1": { id: "1", name: "bulbasour" },
    // "2": { id: "2", name: "ivysaur" },
    // "3": { id: "3", name: "venusaur" },
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setFavoritePokemons(
            state,
            action: PayloadAction<{ [key: string]: SimplePokemon }>
        ) {
            state.favorites = action.payload;
        },

        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;
            if (!!state.favorites[id]) {
                // If the pokemon is already in the state, remove it (unfavorite)
                delete state.favorites[id];
                // return;
            } else {
                // If the pokemon is not in the state, add it (favorite)
                state.favorites[id] = pokemon;
            }

            // grabar en el localStorage, no se debe de hacer en REDUX, pero es un ejemplo
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
    },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
