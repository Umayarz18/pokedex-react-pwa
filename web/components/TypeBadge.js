export default function TypeBadge({ givenType }) {
    console.log(givenType)
    const types = [
        { name: 'normal', color: '#A8A878', borderTopColor: '#D8D8D0', borderBottomColor: '#705848' },
        { name: 'fire', color: '#F08030', borderTopColor: '#F8D030', borderBottomColor: '#C03028' },
        { name: 'water', color: '#6890F0', borderTopColor: '#98D8D8', borderBottomColor: '#807870' },
        { name: 'fairy', color: '#F0B6BC', borderTopColor: '#F5CAD1', borderBottomColor: '#905F63' },
        { name: 'grass', color: '#78C850', borderTopColor: '#C0F860', borderBottomColor: '#588040' },
        { name: 'steel', color: '#B8B8D0', borderTopColor: '#D8D8C0', borderBottomColor: '#807870' },
        { name: 'electric', color: '#F8D030', borderTopColor: '#F8F878', borderBottomColor: '#B8A038' },
        { name: 'ice', color: '#98D8D8', borderTopColor: '#D0F8E8', borderBottomColor: '#9090A0' },
        { name: 'fighting', color: '#C03028', borderTopColor: '#F08030', borderBottomColor: '#484038' },
        { name: 'dragon', color: '#7038F8', borderTopColor: '#B8A0F8', borderBottomColor: '#483890' },
        { name: 'flying', color: '#A890F0', borderTopColor: '#C8C0F8', borderBottomColor: '#705898' },
        { name: 'poison', color: '#A040A0', borderTopColor: '#D880B8', borderBottomColor: '#483850' },
        { name: 'ghost', color: '#705898', borderTopColor: '#A890F0', borderBottomColor: '#483850' },
        { name: 'ground', color: '#E0C068', borderTopColor: '#F8F878', borderBottomColor: '#886830' },
        { name: 'dark', color: '#705848', borderTopColor: '#A8A878', borderBottomColor: '#484038' },
        { name: 'psychic', color: '#F85888', borderTopColor: '#F8C0B0', borderBottomColor: '#789010' },
        { name: 'bug', color: '#A8B820', borderTopColor: '#D8E030', borderBottomColor: '#A8B820' },
        { name: 'rock', color: '#B8A038', borderTopColor: '#E0C068', borderBottomColor: '#886830' },
    ];

    var currentType = types[0];

    types.map((type) => {
        if (givenType.toString() === type.name) {
            console.log(types[1].name);
            currentType = type;
        }
    })


    return (
        <li className="border-t-2 border-b-2 rounded-md list-none text-center 
            font-medium p-1 w-1/3 capitalize"
            style={{
                backgroundColor: currentType.color,
                borderTopColor: currentType.borderTopColor,
                borderBottomColor: currentType.borderBottomColor,
                color: '#F8F8F8',
                fontVariant: 'small-caps',
                textShadow: '0 1px 1px #807870',
            }}>{currentType.name}</li>
    )
}