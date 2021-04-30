
import {Pokemon} from "../src/model/pokemon.model";
import {FirstToAttack} from "../src";

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
