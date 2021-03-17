
// Ventana Start Game

document.querySelector(".control-buttons span").onclick = function () {

    let yourName = prompt("¿Cuál Es Tu Nombre?");

    // Si el nombre esta vacío
    if (yourName == null || yourName == "") {

        document.querySelector(".name span").innerHTML = 'Unknown';

        // Si ingresa su nombre
    } else {

        document.querySelector(".name span").innerHTML = yourName;

    }

    // Quitar pantalla de Star Game
    document.querySelector(".control-buttons").remove();

};

//Variables Bloques (arrays)

let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

//let orderRange = [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());

//console.log(orderRange);
shuffle(orderRange);
//console.log(orderRange);

blocks.forEach((block, index) => {
    block.style.order = orderRange[index];

    //click event
    block.addEventListener('click', function () {
        flipBlock(block);
    });

});


//console.log(orderRange[0]);
//console.log(orderRange[1]);
//console.log(orderRange[2]);
//console.log(orderRange[3]);

//let testOrderRange = [3, 13, 1, 10, 5, 14, 11, 16, 4, 9, 7, 15, 2, 6, 12, 8];


// Efecto Flip

function flipBlock(selectedBlock) {
    selectedBlock.classList.add('is-flipped');

    //recoger las cartas
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    // si hay dos bloques seleccionados
    if (allFlippedBlocks.length === 2) {
        // console.log('Dos Bloques Seleccionados');

        //Stop Click
        stopClicking();

        //Bloques iguales (pareja)
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }


}

//Funcion Stop Clicking 

function stopClicking() {

    //Añadir clase
    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');

    }, duration);

}


//Bloques iguales (Match)
function checkMatchedBlocks(firstBlock, secondBlock) {

    let triesElement = document.querySelector('.tries span');
    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');



    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {

            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, duration);


    }
}


// Funcion barajar (orden cartas)

function shuffle(array) {

    let current = array.length,
        temp,
        random;

    while (current > 0) {

        // Numero Random
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;

    }

    return array;
}




// Ventana victoria (libreria)

document.querySelector(".button-victory").onclick = function () {

    Swal.fire({
        title: '¡Ganaste!',
        text: 'Prueba con el siguiente nivel',
        imageUrl: '/assets/img/aguacate-victoria.jpg',
    })


};



