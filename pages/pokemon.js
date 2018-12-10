import Link from "next/link";

const Pokemon = props => (
    <div>
        <img src={props.sprites.front_default} />
        <h2>{props.name}</h2>
        <h3>Abilities</h3>
        <ul>
            {props.abilities.map(ability => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
        </ul>
        <h3>Types</h3>
        <ul>
            {props.types.map(type => (
                <li key={type.type.name}>{type.type.name}</li>
            ))}
        </ul>
        <Link href="/index">
            <a>Back</a>
        </Link>
    </div>
);

Pokemon.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await res.json();

    console.log(`Fetched pokemon: ${data.name}`);

    return {
        abilities: data.abilities,
        name: data.name,
        sprites: data.sprites,
        types: data.types
    };
};

export default Pokemon;
