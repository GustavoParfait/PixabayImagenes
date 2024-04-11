//Variables y Selectores de elementos del HTML-----------------------------------------------------------------------------------------------------------------
const result = document.querySelector( '#resultado' );
const form = document.querySelector( '#formulario' );





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

    searchImages( searchParameter );

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




function searchImages( parameter ) {

    const key = '43299092-d77fa940cd5de66c1f9778202';
    const url = `https://pixabay.com/api/?key=${key}&q=${parameter}`;

    fetch( url )
        .then( answer => answer.json() )
        .then( result => {

            showImages( result.hits );
        })
}




function showImages( images ) {

    console.log(images)
    cleanHTML();

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
    })
}




function cleanHTML() {

    while( result.firstChild ) {

        result.removeChild( result.firstChild );
    }
}






//Constructores------------------------------------------------------------------------------------------------------------------------------------------------




//Instancias---------------------------------------------------------------------------------------------------------------------------------------------------




//Arreglos-----------------------------------------------------------------------------------------------------------------------------------------------------




//Objetos------------------------------------------------------------------------------------------------------------------------------------------------------




//Clases------------------------------------------------------------------------------------------------------------------------------------------------------









//Prototype----------------------------------------------------------------------------------------------------------------------------------------------------






