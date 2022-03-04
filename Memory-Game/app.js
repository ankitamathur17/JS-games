
const cardArray =[
    {
        name:'pickachu',
        img:'images/pickachu.png'
    },
    {
        name:'bulbasaur',
        img:'images/bulbasaur.jpeg'
    },
    {
        name:'charmender',
        img:'images/charmender.png'
    },
    {
        name:'jigglypuff',
        img:'images/jigglypuff.jpeg'
    },
    {
        name:'squirtle',
        img:'images/squirtle.png'
    },
    {
        name:'onix',
        img:'images/onix.jpeg'
    },
    {
        name:'pickachu',
        img:'images/pickachu.png'
    },
    {
        name:'bulbasaur',
        img:'images/bulbasaur.jpeg'
    },
    {
        name:'charmender',
        img:'images/charmender.png'
    },
    {
        name:'jigglypuff',
        img:'images/jigglypuff.jpeg'
    },
    {
        name:'squirtle',
        img:'images/squirtle.png'
    },
    {
        name:'onix',
        img:'images/onix.jpeg'
    }
]

cardArray.sort(()=>0.5-Math.random());
const gridDisplay=document.querySelector('#grid')
const scoreDisplay=document.querySelector('#score')
let cardsChosen=[];
let cardChosenIds=[];
const cardsWon=[];

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img');
        card.setAttribute('src','images/pokeball.png')
        card.setAttribute('data-id',i)
        card.setAttribute('class','cardsize')
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card);
    }
       
  
}

createBoard()

function checkMatched(){
    const cards=document.querySelectorAll('#grid img')
    const firstCardId=cardChosenIds[0]
    const secondCardId=cardChosenIds[1];
    if(firstCardId==secondCardId){
        alert('You clicked on the same card!')
        cards[firstCardId].setAttribute('src','images/pokeball.png')
        cards[secondCardId].setAttribute('src','images/pokeball.png')
    }
    else if(cardsChosen[0]==cardsChosen[1]){
        alert('You found a match!')
        cards[firstCardId].setAttribute('src','images/blank.png')
        cards[secondCardId].setAttribute('src','images/blank.png')
        cards[firstCardId].removeEventListener('click',flipCard)
        cards[secondCardId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    } else{
        cards[firstCardId].setAttribute('src','images/pokeball.png')
        cards[secondCardId].setAttribute('src','images/pokeball.png')
        alert('Oops! try again')
    }
    cardsChosen=[]
    cardChosenIds=[]
    scoreDisplay.textContent=cardsWon.length;
    if(cardsWon.length==cardArray.length/2){
        scoreDisplay.innerHTML= 'Congratulations you found them all!'
    }
}

function flipCard(){
    let cardId=this.getAttribute('data-id')
    
    cardsChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length==2){
        setTimeout(checkMatched,500)
    }

}