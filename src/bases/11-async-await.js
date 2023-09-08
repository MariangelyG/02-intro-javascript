

const getImagen = async()=>{

try {
    const apiKey = '7eSC1L5nc0rvzJomMbm6M2dWiBTld0Qq';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await resp.json();

    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)
} catch (error) {
    // manejo del error
}

}

getImagen()