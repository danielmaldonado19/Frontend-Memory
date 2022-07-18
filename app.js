//1.Create the array that will contain the cards.

const cardArray = [
    {
        name: 'cheeseburger',
        img: './Images/cheeseburger.png',
    },
    {
        name: 'fries',
        img: './Images/fries.png',
    },
    {
        name: 'hotdog',
        img: './Images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: './Images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: './Images/milkshake.png',
    },
    {
        name: 'pizza',
        img: './Images/pizza.png',
    },

    //2.Put their pair cards.

    {
        name: 'cheeseburger',
        img: './Images/cheeseburger.png',
    },
    {
        name: 'fries',
        img: './Images/fries.png',
    },
    {
        name: 'hotdog',
        img: './Images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: './Images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: './Images/milkshake.png',
    },
    {
        name: 'pizza',
        img: './Images/pizza.png',
    },
];


//3.Sort the cards randomly.

cardArray.sort(() =>  0.5 - Math.random());
/*.sort() method needs 2 values for ordering the array, each one assigned to each array element -> In this case, the first elm has a value of 0.5 and the second elm has a random value btw 0 & 1 -> if the second value is lower to 0.5, then it will go last, but if is higher to 0.5, then it will be first among the 2 values -> Thats how the array will be randomly ordered.*/ 


//4.Create the board for the game.

const gridDisplay = document.querySelector('#grid');
/*.querySelector() search into the document for the elm that has id as grid -> capture it in the const.*/

//4.1.Create an image for each card we need & place it in the grid.

    function createBoard() {
        for( let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            /*.createElement does what the name says. The element type is defined in the param of the method*/
            card.setAttribute('src', './Images/blank.png');
            //The back of the cards is the img blank.
            card.setAttribute('data-id', i);
            //For keeping track of each img.
            card.addEventListener('click', flipCard);
            /*This is part of step 5: here we set each card for activating a fn when user clicks it.*/
            gridDisplay.appendChild(card);
            /*.appendChild sets card node as a child (& will be contained) in grindDisplay node. NOTE:everything in html is a node. In others terms, it says card are childs of gridDisplay.*/
        }
    };

    createBoard();


    //5.Create a fn which flip the card when we click it.

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        /*this refers to the context we called it. In this case the context is the flipCard fn which activates itself with the element we click-> which is referred to the eventListener of the card -> So this is referred to the card.*/
        let cardName = cardArray[cardId].name;
        console.log(cardId);
        console.log(cardName);
    }