
import {Pokemon} from "../src/model/pokemon.model";
import {FirstToAttack} from "../src";
import {Attacks} from "../src";

const Pikachu = new Pokemon({
    name: "Pikachu",
    health: 100,
    speed: 100,
    type: "Electric",
    power: 50
});

const Carapuce = new Pokemon({
    name: "Carapuce",
    health: 100,
    speed: 50,
    type: "Water",
    power: 50
});

describe("attackFirst", () => {

    test("Return the pokemon with the most speed points to attack", function () {
        expect(FirstToAttack(Pikachu, Carapuce)).toBe(Pikachu);
    })

});


describe("attacks", () => {

    test("Return health of the pokemon who was attacked", function () {
        expect(Attacks(Pikachu, Carapuce)).toBe(50);
    })

});


describe("attacks", () => {


    test("Return health of the pokemon who was attacked must be 0 here", function () {
        Carapuce.health =0;
        expect(Attacks(Pikachu, Carapuce)).toBe(0);
    })

});
