import { Bonde } from "./Bonde"
import { Brikke } from "./Brikke"
import { Dronning } from "./Dronning"
import { Konge } from "./Konge"
import { Løper } from "./Løper"
import { Springer } from "./Springer"
import { Tårn } from "./Tårn"

export class Sjakkbrett {
    constructor() {
        this.brett = this.byggBrett()
        this.erVunnet = false
        this.tur = true     // true = hvit, false = svart

        this.settSorteBrikker()
        this.settHviteBrikker()
    }

    byggBrett() {
        let brett = []

        for(let i = 0; i < 8; i++) {
            let rad = []

            for(let j = 0; j < 8; j++) {
                rad.push(null)
            }

            brett.push(rad)
        }

        return brett
    }

    settSorteBrikker() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if ((i == 0 && j == 0) || (i == 0 && j == 7)) {
                    this.brett[i][j] = new Tårn("s", i, j)
                } else if ((i == 0 && j == 1) || (i == 0 && j == 6)) {
                    this.brett[i][j] = new Springer("s", i, j)
                } else if ((i == 0 && j == 2) || (i == 0 && j == 5)) {
                    this.brett[i][j] = new Løper("s", i, j)
                } else if (i == 0 && j == 3) {
                    this.brett[i][j] = new Dronning("s", i, j)
                } else if (i == 0 && j == 4) {
                    this.brett[i][j] = new Konge("s", i, j)
                } else if (i == 1) {
                    this.brett[i][j] = new Bonde("s", i, j)
                }
            }
        }
    }

    settHviteBrikker() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if ((i == 7 && j == 0) || (i == 7 && j == 7)) {
                    this.brett[i][j] = new Tårn("h", i, j)
                } else if ((i == 7 && j == 1) || (i == 7 && j == 6)) {
                    this.brett[i][j] = new Springer("h", i, j)
                } else if ((i == 7 && j == 2) || (i == 7 && j == 5)) {
                    this.brett[i][j] = new Løper("h", i, j)
                } else if (i == 7 && j == 3) {
                    this.brett[i][j] = new Dronning("h", i, j)
                } else if (i == 7 && j == 4) {
                    this.brett[i][j] = new Konge("h", i, j)
                } else if (i == 6) {
                    this.brett[i][j] = new Bonde("h", i, j)
                }
            }
        }
    }
}




