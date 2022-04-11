export class Racer{
    constructor(name, imgURL, number, distance = 0) {
        this.name = name
        this.imgURL = imgURL
        this.number = number
        this.distance = distance
    }
    
    
    get Template() {
        return /*html*/ `
        
        <div class="row">
        <div class="col-12">
        <span id="1">
        <div>
            <h3>${this.name}</h3>
            <img src="${this.imgURL}">
        </div>
        </span>
        </div>
        <div class="col-12">
        <span id="2">
        
        </span>
        </div>
        <div class="col-12">
        <span id="3">
        
        </span>
        </div>
        <div class="col-12">
        <span id="4">
        
        </span>
        </div>
        </div>
        
        
        
        
        
        
        `
    }
}
