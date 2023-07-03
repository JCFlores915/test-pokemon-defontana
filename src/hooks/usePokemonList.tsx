import { useEffect, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonsListResponse, PokemonsResponse, Result } from "../interface/Pokemon.Interface";

export const usePokemonList = () => {
    
    const [pokemonsList, setPokemonsList] = useState<PokemonsResponse[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0';

    const loadListPokemons = async () => {
        setIsLoading(true);
        const response = await pokemonApi.get<PokemonsListResponse>(url);
        mapPokemonList(response.data.results);

    }

    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemonList: PokemonsResponse[] = pokemonList.map(({ name, url }) => {
            name = name[0].toUpperCase() + name.substr(1);
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            
            return { id, name, image };
        });
        setPokemonsList([...newPokemonList]);
        setIsLoading(false);
    }

    useEffect(() => {
       loadListPokemons();
    }, []);

    return {
        pokemonsList,
        isLoading
    }

}

