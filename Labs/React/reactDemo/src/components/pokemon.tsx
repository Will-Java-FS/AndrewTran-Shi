import axios from 'axios';
import { useState, useEffect } from 'react';

export default function PokemonComponent() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);  // Set loading to true initially

    const getData = async () => {
        setLoading(true);
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
        setPokemon(response.data.results);
        setLoading(false);
    };

    const renderSkeleton = () => {
        const skeletonRows = Array.from({ length: 10 }, (_, index) => (
            <tr key={index}>
                <th className="animate-pulse bg-secondary h-6"></th>
                <td className="animate-pulse bg-primary h-6"></td>
                <td className="animate-pulse bg-secondary h-6"></td>
            </tr>
        ));
        return skeletonRows;
    };

    return (
        <>
            <h1 className="text-5xl my-5 font-matemasie bg-gradient-to-r from-amber-500 to-red-500 text-transparent bg-clip-text">
                POKEMON
            </h1>
            <div className="overflow-x-auto max-h-96">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            <th></th>
                            <td className="text-center">ID</td>
                            <td className="text-center">Name</td>
                            <td className="text-center">URL</td>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading
                            ? renderSkeleton()
                            : pokemon && pokemon.map((pokemon, index) => (
                                <tr key={pokemon.name}>
                                    <th>{index + 1}</th>
                                    <td className="text-center">{pokemon.name}</td>
                                    <td className="text-center">{pokemon.url}</td>
                                    <th>{index + 1}</th>
                                </tr>
                            ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <td className="text-center">ID</td>
                            <td className="text-center">Name</td>
                            <td className="text-center">URL</td>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <button className='btn btn-ghost rounded-xl bg-success mt-4' onClick={getData}>Fetch</button>
        </>
    );
}