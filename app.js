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
/*.sort() method needs 2 values for ordering the array, each one assigned to each element -> In this case, the first elm has a value of 0.5 and the second elm has a random value btw 0 & 1 -> if the second value is lower to 0.5, then it will go last, but if is higher to 0.5, then it will be first among the 2 values -> Thats how the array will be randomly ordered.*/ 


//4.Create the boardgame.

const gridDisplay = document.querySelector('#grid');
/*.querySelector() search into the document for the elm that has id as grid -> capture it in the const.*/

//4.1.Create an image for each card we need.

    function createBoard() {
        for( let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            /*.createElement does what the name says. The element type is defined in the param of the method*/
            card.setAttribute('src', 'cardArray.image');
            card.setAttribute('data-id', i);
            console.log(card, i);
            //For keeping track of each img.
        }
    };

    createBoard();