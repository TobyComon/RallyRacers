import { AppState } from "./AppState.js";



function _drawRacers() {
    let template = ``
    const racers = AppState.racers
    racers.forEach(r => template += r.Template)
    document.getElementById('racers').innerHTML = template
}

export class RaceController {
    constructor(){
        _drawRacers()
    }

}

