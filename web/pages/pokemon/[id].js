import Layout from '../../components/Layout';
import Link from 'next/link';
import TypeBadge from '../../components/TypeBadge';
import { useEffect, useState } from 'react';
import ProgressBar from '../../components/ProgressBar';
const Pokemon = ({ pokemon, next, previous, speciesData }) => {
    const { } = speciesData;

    function getId(id) {
        let value = '';
        if (id < 10) {
            value = `00${pokemon.id}`
        }
        else if (id < 100) {
            value = `0${pokemon.id}`
        }
        else {
            value = pokemon.id;
        }
        return value;
    }


    return (
        <Layout title={pokemon.name}>
            <div className="w-full lg:w-max bg-purple-50 lg:rounded-xl p-8 
                lg:border-t-4 lg:border-b-4 border-2 border-red-500">
                <h1 className="text-4xl mb-2 text-center capitalize">
                    {pokemon.name} <span className="text-gray-500 text-md font-medium">#{getId(pokemon.id)}</span>
                </h1>
                {/** Page Navigation */}
                <nav className="flex flex-row justify-between my-4">
                    <a href={`/pokemon/${previous.id}`} className="flex flex-row items-center justify-between">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline mr-2" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <   path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                        </svg>
                        <p className="inline text-gray-500 text-md text-sm md:font-medium mr-2">#{getId(previous.id)}</p>
                        <p className="inline capitalize font-semibold text-gray-800 text-xs md:text-base">{previous.name}</p>
                    </a>

                    <a href={`/pokemon/${next.id}`} className="flex flex-row items-center justify-between">
                        <p className="inline capitalize font-semibold text-gray-800 text-xs md:text-base">{next.name}</p>
                        <p className="inline text-gray-500 text-md text-sm md:font-medium ml-2">#{getId(next.id)}</p>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline ml-2" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </nav>

                <div className="flex flex-col md:flex-row lg:items-start justify-around md:space-x-8 lg:space-x-10">
                    {/**Column 1: Pic + Stats */}
                    <div>
                        <div className="bg-gray-200 rounded-md">
                            <img
                                src={pokemon.image}
                                alt={pokemon.name}
                                className="w-full  h-full"
                            />
                        </div>

                        <PokemonStatsCard statsData={pokemon.stats} />
                    </div>

                    {/**Column 2: Description + Metrics + Types */}
                    <div className="max-w-md">
                        <PokemonDescription textData={speciesData["flavor_text_entries"]} />

                        <PokemonMetricsCard pokemon={pokemon} />

                        <div>
                            <h2 className="text-2xl mt-6 mb-2">Types</h2>
                            <ul className="flex flex-wrap space-x-2">
                                {pokemon.types.map((type, index) => (
                                    <TypeBadge givenType={type.type.name} key={index} />
                                ))}
                            </ul>
                        </div>
                    </div>



                </div>
                <p className="mt-10 text-center">
                    <Link href="/">
                        <a>
                            <button className="bg-[#30a7d7] rounded-lg py-2 px-3 font-medium text-xl text-white">Back Home</button>
                        </a>
                    </Link>
                </p>
            </div>
        </Layout>
    )
}

function PokemonStatsCard({ statsData }) {
    const { } = statsData;

    return (
        <div className="bg-gray-400 w-full h-min rounded-md mt-3 p-1">
            <h2 className="m-2 text-gray-700 font-medium ">Stats</h2>
            <ul className="m-2 flex flex-col ">
                {statsData.map(({ base_stat, stat, effort }, index) => (
                    <li key={`${index}-${base_stat}`} className="">
                        <div className="text-xs capitalize font-bold">{stat.name}</div>
                        <ProgressBar value={base_stat} label={stat.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

function PokemonDescription({ textData }) {

    return (
        <div className="mb-2 text-gray-800 text-sm md:text-base font-medium">
            <p>{textData[0].flavor_text}</p>
        </div>
    )
}

function PokemonMetricsCard({ pokemon }) {
    return (
        <div className="bg-[#30a7d7] my-4 lg:my-0 rounded-lg  
                             lg:p-3 flex flex-row h-36 justify-center lg:h-48
                             w-full ">
            <div className="my-2 ml-3 lg:m-5 text-xl  w-24">
                <p>
                    <strong className="font-medium text-white mr-2 text-base block">Weight:</strong> {pokemon.weight / 10} kg
                </p>
                <p>
                    <strong className="font-medium text-white mr-2 text-base block">Height:</strong>
                    {pokemon.height / 10} M
                </p>
            </div>
            <div className=" my-2 mr-3 lg:m-5 text-xl  w-36">
                <div>
                    <div className="font-medium text-white mr-2 text-base">Abilities:</div>
                    <div className="flex flex-col capitalize text-lg">
                        {pokemon.abilities.map(({ ability }, index) => (
                            <a key={`${ability.name}-index`}>{ability.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function getNextEntry(id) {
    let entry = id;
    if (id == 898) {
        entry = 1;
    }
    else {
        entry++;
    }
    return entry;
}

function getPreviousEntry(id) {
    let entry = id;
    if (id == 1) {
        entry = 898;
    }
    else {
        entry--;
    }
    return entry;
}

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const [pokemonRes, nextRes, previousRes, speciesRes] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${getNextEntry(id)}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${getPreviousEntry(id)}`),
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
    ])
    const [pokemon, next, previous, speciesData] = await Promise.all([
        pokemonRes.json(),
        nextRes.json(),
        previousRes.json(),
        speciesRes.json(),
    ])
    const paddedId = ('00' + id).slice(-3);
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

    return {
        props: { pokemon, next, previous, speciesData },
    };
}



export default Pokemon