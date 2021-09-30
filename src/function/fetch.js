import movie from '../API/movie.json'
import header from '../API/header.json'

export async function fetchMovie(){
    return movie.movie;
}

export async function fetchHeader(){
    return header
}

//provider , repository > utility / service /등....

export default fetch;