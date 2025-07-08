"use client";

import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemon"; // <-- Replace with the correct path to your slice or actions file

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
    useEffect(() => {
        // This is to ensure that the store is initialized with the localStorage data
        const favorites = JSON.parse(localStorage.getItem("favorites") ?? "{}");
        store.dispatch(setFavoritePokemons(favorites));
    }, []);

    return <Provider store={store}>{children}</Provider>;
};
