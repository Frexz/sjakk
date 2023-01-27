import { Brikke } from "./Brikke";

export class Dronning extends Brikke {

    flytt() {

    }

    toString() {
        return `dronning_${this.farge}.png`
    }
}