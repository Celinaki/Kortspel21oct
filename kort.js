const cardsArray = [
    { color: "hearts", number: 1, source: "cards/AH.svg" },
    { color: "hearts", number: 2, source: "cards/2H.svg" },
    { color: "hearts", number: 3, source: "cards/3H.svg" },
    { color: "hearts", number: 4, source: "cards/4H.svg" },
    { color: "hearts", number: 5, source: "cards/5H.svg" },
    { color: "hearts", number: 6, source: "cards/6H.svg" },
    { color: "hearts", number: 7, source: "cards/7H.svg" },
    { color: "hearts", number: 8, source: "cards/8H.svg" },
    { color: "hearts", number: 9, source: "cards/9H.svg" },
    { color: "hearts", number: 10, source: "cards/TH.svg" },
    { color: "hearts", number: 11, source: "cards/JH.svg" },
    { color: "hearts", number: 12, source: "cards/QH.svg" },
    { color: "hearts", number: 13, source: "cards/KH.svg" },
  
    { color: "diamonds", number: 1, source: "cards/AD.svg" },
    { color: "diamonds", number: 2, source: "cards/2D.svg" },
    { color: "diamonds", number: 3, source: "cards/3D.svg" },
    { color: "diamonds", number: 4, source: "cards/4D.svg" },
    { color: "diamonds", number: 5, source: "cards/5D.svg" },
    { color: "diamonds", number: 6, source: "cards/6D.svg" },
    { color: "diamonds", number: 7, source: "cards/7D.svg" },
    { color: "diamonds", number: 8, source: "cards/8D.svg" },
    { color: "diamonds", number: 9, source: "cards/9D.svg" },
    { color: "diamonds", number: 10, source: "cards/TD.svg" },
    { color: "diamonds", number: 11, source: "cards/JD.svg" },
    { color: "diamonds", number: 12, source: "cards/QD.svg" },
    { color: "diamonds", number: 13, source: "cards/KD.svg" },
  
    { color: "clubs", number: 1, source: "cards/AC.svg" },
    { color: "clubs", number: 2, source: "cards/2C.svg" },
    { color: "clubs", number: 3, source: "cards/3C.svg" },
    { color: "clubs", number: 4, source: "cards/4C.svg" },
    { color: "clubs", number: 5, source: "cards/5C.svg" },
    { color: "clubs", number: 6, source: "cards/6C.svg" },
    { color: "clubs", number: 7, source: "cards/7C.svg" },
    { color: "clubs", number: 8, source: "cards/8C.svg" },
    { color: "clubs", number: 9, source: "cards/9C.svg" },
    { color: "clubs", number: 10, source: "cards/TC.svg" },
    { color: "clubs", number: 11, source: "cards/JC.svg" },
    { color: "clubs", number: 12, source: "cards/QC.svg" },
    { color: "clubs", number: 13, source: "cards/KC.svg" },
  
    { color: "spades", number: 1, source: "cards/AS.svg" },
    { color: "spades", number: 2, source: "cards/2S.svg" },
    { color: "spades", number: 3, source: "cards/3S.svg" },
    { color: "spades", number: 4, source: "cards/4S.svg" },
    { color: "spades", number: 5, source: "cards/5S.svg" },
    { color: "spades", number: 6, source: "cards/6S.svg" },
    { color: "spades", number: 7, source: "cards/7S.svg" },
    { color: "spades", number: 8, source: "cards/8S.svg" },
    { color: "spades", number: 9, source: "cards/9S.svg" },
    { color: "spades", number: 10, source: "cards/TS.svg" },
    { color: "spades", number: 11, source: "cards/JS.svg" },
    { color: "spades", number: 12, source: "cards/QS.svg" },
    { color: "spades", number: 13, source: "cards/KS.svg" },
  ];


  let showCard = document.querySelector("img");
  let lowerButton=document.querySelector(".lower")
  let higherButton=document.querySelector(".higher")
  let equalButton=document.querySelector(".equal")
  let score=document.querySelector(".score")
  let lives=document.querySelector(".lives")
  let shuffleDeck=[];
  let cardsLeft=document.querySelector(".cards_left")
  let currentCard;

  



  function randomCard(){
    let random =  Math.floor(Math.random()*(cardsArray.length)); //Slumpa siffra i array längden(1-52)
    let randomizedNum = cardsArray[random].number;//Gör en variabel för värdet på numret för just det objektet som är random. Alltså cardsarray[3].number(som är 5 t.ex)Denna variabel är då
    //tredje objektets nyckel för number.
    currentCard = randomizedNum;                                //Gör en variabel för nuvarande kortet med värdet av det ovan, cardsArray[index].number
    showCard.setAttribute("src", cardsArray[random].source);    //Sett  bildens scr värde till random objektets värde vid soruce
    cardsArray.splice(random,1)                                 //Ta bort random indexet från cardsarray, bara ett steg

  }

lowerButton.addEventListener("click", function(){               //Click event vid lowerbutton
    //få kortnummer
    cardsLeft.innerText-=1;                                     //Ta bort 1 från cardsleft, i och med att ett klick gjordes
    let lastCard = currentCard;                                 //Deklarera variabeln lastCard som har värdet CurrentCard
    //ta nästa kort
    randomCard();                                               //Kalla på functionen över
    if(lastCard <= currentCard ){
        lives.innerText--;
        if(lives.innerText==0){
            lostGame()
    }
    }
    if(lastCard > currentCard){
        score.innerText++;
    }
    console.log(currentCard)
    console.log(lastCard)
})




higherButton.addEventListener("click", function(){
    cardsLeft.innerText-=1;

    let lastCard = currentCard;//Måste va innan kallaren, annars byter den värdet

    randomCard();

    if(lastCard >= currentCard ){
        lives.innerText--;
        if(lives.innerText==0){
            lostGame()
    }
    }
    if(lastCard < currentCard){
        score.innerText++;
    }
})

equalButton.addEventListener("click", function(){
    cardsLeft.innerText-=1;

    let lastCard = currentCard;//Måste va innan kallaren, annars byter den värdet
    randomCard();

    if(lastCard == currentCard ){
        score.innerText++;
    }
    if(lastCard < currentCard || lastCard>currentCard){
        lives.innerText--;
        if(lives.innerText==0){
                lostGame()
        }
    }
})

let show=document.querySelector(".hidden");
let showP=document.createElement("p")
let showBtn=document.createElement("button")   

 const refreshPage = () => {
    location.reload();
  }
  
  showBtn.addEventListener('click', refreshPage)

function lostGame(){
    if(lives.innerText==0){
        show.append("Game over! Spela igen? Klicka på knappen!",showP)
        show.append(showBtn)    
        console.log(show.childNodes)
        showBtn.innerText="Spela igen!"
        equalButton.className="hide"
        lowerButton.className="hide"
        higherButton.className="hide"
    }
}


    randomCard();
    console.log(cardsArray)




