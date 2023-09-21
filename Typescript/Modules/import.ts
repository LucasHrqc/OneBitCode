import {Spaceship} from "./export";
import * as _ from "lodash";

let testing: Spaceship // Use the interface or type as you want.

interface BattleSpaceship extends Spaceship {
    weapons: number
}

let xwing: BattleSpaceship = {
    name: "X-wing",
    pilot: "Lucas",
    speed: 50,
    weapons: 2
};
