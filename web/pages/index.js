import Head from 'next/head'
import Layout from '../components/Layout';
import Link from 'next/dist/client/link';
export default function Home({ pokemon }) {
    return (
        <Layout title="NextJS PokeDex">
            <div className="bg-gray-100 w-screen md:max-w-2xl lg:max-w-4xl lg:rounded-xl p-8 
                lg:border-t-4 lg:border-b-4 border-2 border-red-500">
                <h1 className="text-4xl mb-8 text-center  text-gray-500">NextJS Pokedex</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center bg-gray-100">
                    {pokemon.map((item, index) => (
                        <PokemonCard pokemon={item} index={index} />
                    ))}
                </ul>
            </div>
        </Layout>
    )
}


function PokemonCard({ pokemon, index }) {
    const types = getPokemonTypes(index + 1);
    console.log(types)
    return (
        <li key={index}>
            <Link href={`/pokemon/${index + 1}`}>
                <a className="p-4  m-2  capitalize flex flex-col items-center 
                   justify-center text-lg hover:transform hover:-translate-y-6 
                   transition duration-150 ease-in-out">
                    <div className="bg-gray-200 rounded-md">
                        <img
                            src={pokemon.image}
                            alt={pokemon.name}
                            className="w-full  h-full"
                        />
                    </div>
                    <div className="flex flex-col items-start  self-start mx-16 lg:mx-8">
                        <span className="mr-2 font-medium text-gray-500 text-xs" >
                            #{index + 1}
                        </span>
                        <h2 className="font-semibold text-gray-800 text-2xl">{pokemon.name}</h2>
                        <div>
                        </div>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const { results } = await res.json();
    const pokemon = results.map((pokeman, index) => {
        const paddedId = ('00' + (index + 1)).slice(-3);
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        return { ...pokeman, image, };
    });
    return {
        props: { pokemon },
    };

}

async function getPokemonTypes(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { types } = await res.json();
    return types;
}