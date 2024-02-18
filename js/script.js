let leftElement = document.querySelector("#side_left");
let rightElement = document.querySelector("#side_right");



const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];





showObj (images);






























// I create a function that allows you to show the data present in the objects on the screen

function showObj (obj){

    // I open a loop that takes every single element present in the object and displays it
    for (let i = 0; i < obj.length; i++) {
        
        const eachCard = obj[i];
        let photo = "";
        let title = "";
        let text = "";

        // I open a cycle that allows me to sort the data and connect it to the elements on the page 
        for (let key in eachCard) {
            if (key === "image") {
                photo += `<img class="img-fluid w-100 h-100 object-fit-cover" src="./${eachCard[key]}">`;
            } else if (key === "title") {
                title += `<h5>${eachCard[key]}</h5>`;
            } else {
                text += `<span>${eachCard[key]}</span>`;
            }
        }

        // I show the results obtained on the page
        rightElement.innerHTML += `<div class="my_height2 thumb">       
                                        ${photo}
                                    </div>`;

        leftElement.innerHTML += `<div class="position-relative slide">
                                        ${photo}
                                        <div class="position-absolute my_position text-white text-end">
                                            ${title}
                                            ${text}
                                        </div>
                                   </div>`;

    }


}










document.querySelector("#side_left div:nth-of-type(1)").className += " active";
document.querySelector("#side_left div:nth-of-type(1) div").className += " active";
document.querySelector("#side_right div:nth-of-type(1)").className += " active";

/*
-  salvo un contatore della slide
-  QUANDO premo la freccia SU
    - prendo l'immagine attuale e le rimuovo la classe "active"  
    - aumento il contatore di 1
    - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
*/


// -  salvo un contatore della slide
let slideNumber = 1;

// -  QUANDO premo la freccia SU
document.querySelector("#down-arrow").addEventListener("click", function() {


    if (slideNumber < images.length) {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#side_left div:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#side_left div:nth-of-type(${slideNumber}) div`).classList.remove("active");
        document.querySelector(`#side_right div:nth-of-type(${slideNumber})`).classList.remove("active");

        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#side_left div:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#side_left div:nth-of-type(${slideNumber}) div`).classList.add("active");
        document.querySelector(`#side_right div:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#side_left div:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#side_left div:nth-of-type(${slideNumber}) div`).classList.remove("active");
        document.querySelector(`#side_right div:nth-of-type(${slideNumber})`).classList.remove("active");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#side_left div:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#side_left div:nth-of-type(${slideNumber}) div`).classList.add("active");
        document.querySelector(`#side_right div:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);
    }

        
});


document.querySelector("#up-arrow").addEventListener("click", function() {

    if (slideNumber > 1) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#side_left div:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#side_left div:nth-of-type(${slideNumber}) div`).classList.remove("active");
        document.querySelector(`#side_right div:nth-of-type(${slideNumber})`).classList.remove("active");

        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#side_left div:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#side_left div:nth-of-type(${slideNumber}) div`).classList.add("active");
        document.querySelector(`#side_right div:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#side_left div:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#side_left div:nth-of-type(${slideNumber}) div`).classList.remove("active");
        document.querySelector(`#side_right div:nth-of-type(${slideNumber})`).classList.remove("active");

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = images.length;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#side_left div:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#side_left div:nth-of-type(${slideNumber}) div`).classList.add("active");
        document.querySelector(`#side_right div:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);
    }
    


});






// questa riga mostra la prima slide al caricamento della pagina
showSlide(1);


/*************** EXPERIMENT *******************/ 

// commenti
// provare ad utilizzare il this per prendere l'active
// prende il click solo sulle thumb in active



// gestione click delle thumbnail
// fare in modo che tutte le thumbnail abbiano un addEventListener
// al click di una thumbnail verrà attivata la slide corrispondente
// (cliccando sulla SECONDA thumbnail verrà mostrata la SECONDA slide)

// ripeschiamo dal nostro document tutte le thumbnail
// const thumbnailsElements = document.querySelectorAll("#side_right div:nth-of-type(1)");


// // gestisco i click delle thumbnail
// thumbnailsElements.forEach(((currentThumbnail, index) => {

//     // quando clicchiamo su una thumbnail
//     currentThumbnail.addEventListener("click", () => {

//         slideNumber = index + 1;
    

//         showSlide(slideNumber);

//         console.log("tasto cliccato");
//         // viewThumbnail(currentThumbnail, index)

//     })

// }));




function showSlide(number) {
    // number -> slide da mostrare e anteprima collegata
    
    // codice per mostrare la slide corretta

    // rimuoviamo la classe "active" da tutte le altre slide

    // ci metto tutte le slide 
    const slides = document.querySelectorAll(".slide");
    slides.forEach(currentSlide => {
        currentSlide.classList.remove("active")
    }) 

    // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
    document.querySelector(`#side_left .slide:nth-of-type(${number})`).classList.add("active");
    document.querySelector(`#side_left .slide:nth-of-type(${number}) div`).classList.add("active");


    // codice per mostrare la thumbnail corretta

    // prendere tutte le anteprime e rimuovere la classe active
    const thumbs = document.querySelectorAll(".thumb");
    thumbs.forEach(thumb => {
        thumb.classList.remove("active");
    })

    document.querySelector(`.thumb:nth-of-type(${number})`).classList.add("active");
}


// al caricamento della pagina parte un timer
// ogni 3 secondi cambia in automatico la slide


// mi salvo gli elementi dei pulsanti
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const reverseButton = document.querySelector("#reverse-button");




let timer;

playButton.addEventListener("click", () => {

    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";
    reverseButton.style.display = "none";


    timer = setInterval(function() {
    
        if(slideNumber > images.length -1) {
            slideNumber = 1;
            showSlide(slideNumber);
    
        } else {
    
            slideNumber++;
            showSlide(slideNumber);
        }
    
    }, 3000);
});


pauseButton.addEventListener("click", () => {
    playButton.style.display = "inline-block";
    reverseButton.style.display = "inline-block"
    pauseButton.style.display = "none";

    clearInterval(timer);
});


reverseButton.addEventListener("click", () => {
    reverseButton.style.display = "none"
    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";



    timer = setInterval(function() {
    
        if(slideNumber <= 1) {
            slideNumber = images.length;
            showSlide(slideNumber);
    
        } else {
    
            slideNumber--;
            showSlide(slideNumber);
        }
    
    }, 3000);

});
