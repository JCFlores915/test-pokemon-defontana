
import { useEffect, useState } from 'react';
import { PokemonDetails } from '../interface/Pokemon.Interface';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemonDetails = (name: string ) => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>({} as PokemonDetails);
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    const loadPokemonDetails = async () => {
        setIsLoading(true);
        const response = await pokemonApi.get<PokemonDetails>(url);
        setPokemonDetails(response.data);
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemonDetails();
    }, [name]);

    return {
        isLoading,
        pokemonDetails
    }
}
