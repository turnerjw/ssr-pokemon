import styled from "styled-components";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
    <div>
        <h1>Kanto Pokemon</h1>
        <ul>
            {props.pokemon_entries.map(pokemon => {
                return (
                    <li key={pokemon.entry_number}>
                        <Link href={`/pokemon?id=${pokemon.entry_number}`}>
                            <a>{pokemon.pokemon_species.name}</a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </div>
);

Index.getInitialProps = async function() {
    const res = await fetch("https://pokeapi.co/api/v2/pokedex/2/");
    const data = await res.json();

    console.log(
        `Kanto Pokedex fetched. Pokemon entry count: ${
            data.pokemon_entries.length
        }`
    );

    return {
        pokemon_entries: data.pokemon_entries
    };
};

export default Index;
