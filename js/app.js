//Variables y Selectores de elementos del HTML-----------------------------------------------------------------------------------------------------------------
const result = document.querySelector( '#resultado' );
const form = document.querySelector( '#formulario' );
const pagination = document.querySelector( '#paginacion' );
const recordsPerPage = 30;
let totalPages;
let iterator;
let actualPage = 1;





//Eventos------------------------------------------------------------------------------------------------------------------------------------------------------
window.onload = () => {
    form.addEventListener( 'submit', validateForm );
}





//Funciones----------------------------------------------------------------------------------------------------------------------------------------------------
function validateForm( e ) {
    
    e.preventDefault();

    const searchParameter = document.querySelector( '#termino' ).value;

    if( searchParameter === '' ) {
        msjAlert('no has ingresado lo que deseas buscar')
        return;
    }

    searchImages();

}




function msjAlert( msj ) {

    const alertExists = document.querySelector( '.deleteAlert' );

    if( !alertExists ){

        const pAlert = document.createElement('P');
        pAlert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'deleteAlert');

        pAlert.innerHTML = `
    
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${msj}</span>

        `;

        form.appendChild(pAlert);


        setTimeout(() => {

            pAlert.remove();

        }, 2000);

    }
    
}




function searchImages() {

    const parameter = document.querySelector( '#termino' ).value;

    const key = '43299092-d77fa940cd5de66c1f9778202';
    const url = `https://pixabay.com/api/?key=${key}&q=${parameter}&per_page=${recordsPerPage}&page=${actualPage}`;

    fetch( url )
        .then( answer => answer.json() )
        .then( result => {
            totalPages = calculatePages( result.totalHits );
            showImages( result.hits );

        })
}




function *paginador( total ) {

    for( let i = 1; i <= total; i++ ) {

        yield i;
    }
}




function calculatePages( total) {

    return parseInt( Math.ceil( total / recordsPerPage ));
}




function showImages( images ) {

    cleanHTML(result);

    images.forEach( image => {

        const { previewURL, likes,views, largeImageURL } = image;

        result.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white" >
                <img class="w-full" src="${previewURL}">
                <div class="p-4">
                    <p class="font-bold">${likes} <span class="font-light">Me Gusta</span></p>
                    <p class="font-bold">${views} <span class="font-light">Veces Vista</span></p>
                    <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bolt text-center rounded mt-5 p-1" href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Ver Imagen</a>
                </div>
            </div>
        </div>  
        `;
    });

    cleanHTML( pagination );

    printPager();
}




function printPager() {

    iterator = paginador( totalPages );
    while( true ) {

        const { value, done } = iterator.next();
        if( done ) return;

        // de lo contrario (else) generar un boton por cada pagina
        const aBtn = document.createElement( 'A' );
        aBtn.href = '#';
        aBtn.dataset.pagina = value;
        aBtn.textContent = value;
        aBtn.classList.add( 'siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'rounded');
        aBtn.onclick = () => {

            actualPage = value;
            searchImages();

        }

        pagination.appendChild( aBtn );
    }
}





function cleanHTML(clean) {

    while( clean.firstChild ) {

        clean.removeChild( clean.firstChild );
    }
}






//Constructores------------------------------------------------------------------------------------------------------------------------------------------------




//Instancias---------------------------------------------------------------------------------------------------------------------------------------------------




//Arreglos-----------------------------------------------------------------------------------------------------------------------------------------------------




//Objetos------------------------------------------------------------------------------------------------------------------------------------------------------




//Clases------------------------------------------------------------------------------------------------------------------------------------------------------









//Prototype----------------------------------------------------------------------------------------------------------------------------------------------------






