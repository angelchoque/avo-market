/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


/* console.log('Happy hacking :) -----')
const url = "https://platzi-avo.vercel.app/api/avo"
 */
// web api - fetch -> traer recursos desde cualquier sitio web
// promesas -> mejor usar async/await
/* 
    1. conectarnos al servidor
    -> window.fetch(url) <- fetch devuelve una promesa y trabajaremons con promesas
    --> .then(recibe una respuesta => convertirlo a archivo .json)
    2. procesar la respuesta y convertirlo a JSON

    3. JSON -> DATA -> Renderizar la informacion el browser
*/
/* window.fetch(url).then(respuesta=>respuesta.json())
// concatenar otra promesa -- 
// informacion ppura
.then(responseJson => {
    const allItems = []
    responseJson.data.forEach((item)=> {
        // console.log(item.name)
        // crear nodo de imagen
        const image = document.createElement('img')
        // crear nodo de titulo
        const title = document.createElement('h2')
        // crear nodo de precio
        const price = document.createElement('div')

        // document.body.append(image,title,price)
        const container = document.createElement('div')
        container.append(image,title,price)

        allItems.push(container)
    });
    document.body.append(...allItems)
})
 */


// with async await
const urlBase= "https://platzi-avo.vercel.app";
const appNode = document.querySelector('div#app')

// intl <- internacionalisacion
/* 
    1. Dar formato a fechas 
    2. Dar formato a monedas
*/
const formatPrice = (price)=>{
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency', 
        currency: 'USD'
    }).format(price)
    return newPrice
}

//web api
async function fetchData() {
  const response = await fetch(`${urlBase}/api/avo`),
  data = await response.json(),
  allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    image.src = `${urlBase}${item.image}`
    image.className = 'container__img'

    // create title
    const title = document.createElement("h2");
    title.textContent = item.name
    title.className = 'container__title'
    // title.style = 'font-size: 2rem'
    // title.style.fontSize = '2rem'
    // title.className = 'text-2xl text-red-600' <- tain..

    // create price
    const price = document.createElement("div");
    // intl
    price.textContent = formatPrice(item.price)
    price.className = 'container__price'

    const container = document.createElement("div");
    container.append(image, title, price);
    container.className = 'item-container'
    /* // Primero puedes usar clases iniciales (aunque para código limpio lo mejor es definirlas directamente en el HTML)
    imagen.className = "h-16 w-16 md:h-24"

    // Y ahora podemos usar classList para añadir/borrar dinámicamente
    imagen.classList.add("md:w-24") // Añade una clase
    imagen.classList.remove("h-16") // Elimina una clase */

    allItems.push(container);
  });

  appNode.append(...allItems)
}

fetchData();