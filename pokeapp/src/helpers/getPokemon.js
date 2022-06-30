
const getInfo = async( url ) => {

    const resp = await fetch(url);
    const data = await resp.json();
    
    return data
}

const getGifs = ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${ category }&limit=1`;
    const  data  = getInfo( url );
    
    // const gif = {
    //     id: data.img.id,
    //     title: data.img.title,
    //     url: data.img.images.downsized_medium.url
    // };
    
    // return gif;
    return data
}

export const getPokemon = ( pokemon ) => {

    const urlApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const resp = getInfo( urlApi );
    // const { id, title, url } = getGifs( pokemon );
    console.log(getGifs(pokemon))

    // const data = {
    //     id, 
    //     title,
    //     url
    // }

    return resp
} 


