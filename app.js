let yellowBulbPick = document.querySelector("button");
let bgBulb = document.querySelector('#yellow-bulb');
let bgBulbShadow = document.querySelector('#yellow-bulb');
let count = 1
yellowBulbPick.addEventListener('click', function(a){
    if(count === 1){
        bgBulb.style = "background-color: yellow; box-shadow: 10px 10px 60px yellow;",
        count = 2
    }
    else{
        bgBulb.style = "background-color: transparent;"
        count = 1
    }
})

// white-bulb



let whiteBulbPick = document.querySelector("button");
let bgBulbWhite = document.querySelector('#white-bulb');
let bgBulbShadowWhite = document.querySelector('#white-bulb');
let countWhite = 1

whiteBulbPick.addEventListener('click', function(a){

    if(countWhite === 1){
        bgBulbWhite.style = "background-color: #fff; box-shadow: 10px 10px 60px #fff;",
        countWhite = 2
    }
    else{
        bgBulbWhite.style = "background-color: transparent;"
        countWhite = 1
    }
})









