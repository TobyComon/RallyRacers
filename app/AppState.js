import { Racer } from "./Models/Racer.js"


let racer1 = new Racer('bingo sullivan', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fallthetropes.org%2Fwiki%2FVideogamedunkey&psig=AOvVaw2X6zkALCYME0RlufVP47vn&ust=1649190103771000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLiR1Iue-_YCFQAAAAAdAAAAABAF',)

let racer2 = new Racer('sango fastman', 'https://static.wikia.nocookie.net/meme/images/4/42/1385136139955.png/revision/latest/smart/width/250/height/250?cb=20150207013804')

let racer3 = new Racer('primbus bongo', 'https://thiscatdoesnotexist.com')

let racer4 = new Racer('potato jones', 'https://thiscatdoesnotexist.com')


export const AppState = {
    racers: [racer1, racer2, racer3, racer4]
}