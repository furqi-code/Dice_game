var player1, player2 ; 
var  pl1Cnt=0, pl2Cnt=0, tie=0 ;
let p1, p2 ;

function updateWinner()
{
    if(player1>player2){
        document.querySelector("#won").innerHTML = p1.value + " Winner" ;   
        pl1Cnt++ ; 
    }else if(player2>player1){
        document.querySelector("#won").innerHTML = p2.value + " Winner" ;   
        pl2Cnt++ ;
    }else{
        document.querySelector("#won").innerHTML = "Tie";    
        tie++ ;
    }
}
function updateStats()
{
    document.querySelector(".a").innerHTML =  p1.value + " - " + pl1Cnt + " wins" ; 
    document.querySelector(".b").innerHTML =  p2.value + " - " + pl2Cnt  + " wins" ;
    document.querySelector(".t").innerHTML = "Tie - " + tie ;  
}

document.querySelector("#start").addEventListener("click", function(){
    player1 = Math.floor(Math.random()*6)+1;
    player2 = Math.floor(Math.random()*6)+1;
    console.log(player1,player2);
    p1 = document.querySelector("#first") ;
    p2 = document.querySelector("#second") ;
    document.querySelector("#player1").setAttribute('src','./inverted-dice-'+player1+'.png');
    document.querySelector("#player2").setAttribute('src','./inverted-dice-'+player2+'.png');
    updateWinner() ;    
    updateStats() ;
})

document.querySelector("#user1").addEventListener("click", function(){
    player1 = Math.floor(Math.random()*6)+1;
    console.log(player1);
    document.querySelector("#player1").setAttribute('src','./inverted-dice-'+player1+'.png');
    updateWinner() ;   
    updateStats() ;
})

document.querySelector("#user2").addEventListener("click", function(){
    player2 = Math.floor(Math.random()*6)+1;
    console.log(player2);
    document.querySelector("#player2").setAttribute('src','./inverted-dice-'+player2+'.png');
    updateWinner() ;   
    updateStats() ;
})



// Another long wayyyy to update images
// switch(player1){
//     case 1:
//         document.querySelector("#player1").setAttribute('src','./inverted-dice-'+player1+'.png');
//         break;
//     case 2:
//         document.querySelector("#player1").setAttribute('src','./inverted-dice-'+player1+'.png');
//         break;
//     case 3:
//         document.querySelector("#player1").setAttribute('src','./inverted-dice-'+player1+'.png');
//         break;
//     case 4:
//         document.querySelector("#player1").setAttribute('src','./inverted-dice-'+player1+'.png');
//         break;
//     case 5:
//         document.querySelector("#player1").setAttribute('src','./inverted-dice-'+player1+'.png');
//         break;
//     case 6:
//         document.querySelector("#player1").setAttribute('src','./inverted-dice-'+player1+'.png');
//         break;
// }
// switch(player2){
//     case 1:
//         document.querySelector("#player2").setAttribute('src','./inverted-dice-1.png');
//         break;
//     case 2:
//         document.querySelector("#player2").setAttribute('src','./inverted-dice-2.png');
//         break;
//     case 3:
//         document.querySelector("#player2").setAttribute('src','./inverted-dice-3.png');
//         break;
//     case 4:
//         document.querySelector("#player2").setAttribute('src','./inverted-dice-4.png');
//         break;
//     case 5:
//         document.querySelector("#player2").setAttribute('src','./inverted-dice-5.png');
//         break;
//     case 6:
//         document.querySelector("#player2").setAttribute('src','./inverted-dice-6.png');
//         break;
// }

