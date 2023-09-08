// import {heroes} from './data/heroes'
// import {heroes} from './data/heroes'

import heroes from "../data/heroes";

export const getHeroeById = (id) => heroes.find((heroe)=> heroe.id === id)
// console.log(getHeroById(2));

export const getHeroesByOwner = (owner) => heroes.filter((heroe)=> heroe.owner === owner)
// console.log(getHeroesByOwner("DC"));



