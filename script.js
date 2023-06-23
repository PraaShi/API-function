// https://superheroapi.com/api/access-token/character-id
const getSuperHero = () =>{
    fetch('https://superheroapi.com/api.php/791332545843772/245')
    .then(response => response.json())
    .then(json => console.log(json))
}
getSuperHero()