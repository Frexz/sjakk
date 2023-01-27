import { Brikke } from "./Brikke";

export class Bonde extends Brikke {

    flytt() {
        
    }

    toString() {
        return `bonde_${this.farge}.png`
    }
}