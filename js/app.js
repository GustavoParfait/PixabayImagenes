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

    console.log( images );
}






//Constructores------------------------------------------------------------------------------------------------------------------------------------------------




//Instancias---------------------------------------------------------------------------------------------------------------------------------------------------




//Arreglos-----------------------------------------------------------------------------------------------------------------------------------------------------




//Objetos------------------------------------------------------------------------------------------------------------------------------------------------------




//Clases------------------------------------------------------------------------------------------------------------------------------------------------------









//Prototype----------------------------------------------------------------------------------------------------------------------------------------------------






