import {Pokemon} from "./model/pokemon.model";

const Pikachu = new Pokemon({
    name: "Pikachu",
    speed: 100,
    health: 100,
    type: "Electric",
    power: 50
});

const Carapuce = new Pokemon({
    name: "Carapuce",
    health: 100,
    type: "Water",
    power: 50
});

export function FirstToAttack(pokemon: Pokemon , pokemon2: Pokemon): Pokemon{
    return pokemon.speed >= pokemon2.speed ? pokemon : pokemon2;
}

export function Attacks(pokemon: Pokemon , pokemon2: Pokemon): number{
    pokemon2.health = pokemon2.health-pokemon.power < 0 ? 0 : pokemon2.health-pokemon.power;
    return pokemon2.health;
}

