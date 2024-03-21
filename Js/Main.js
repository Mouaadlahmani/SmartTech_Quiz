var timer;

var ele = document.getElementById('chrono');

(function (){
    var sec = 60;
    var min = 14;
    timer = setInterval(()=>{
        sec--;
        if(sec === 0){
            min--;
            sec = 59
        }
        if(sec<10 && min<10){
              ele.innerHTML = "0" + min +":0"+ sec;
        }else if(min<10){
            ele.innerHTML = "0" + min +":"+ sec;
        }else if(sec<10){
            ele.innerHTML = min +":0"+ sec;
        }else{
            ele.innerHTML = min +":"+ sec;
        }
    }, 1000)
})()

//=================function pour changer entre les questions================
var questions=["In order to fint him, they needed to know his exact ____.", "before he could start applying for jobs, he needed to ___ his resume.", "She decided she wanted to ___ a few extra pounds and started a diet."];
var reponse=[["location","place", "site", "setting"],["back up","fill in", "inform", "update"],["throw away","get rid of", "dispose of", "leave off"]];

function changer(){

    questionschange();

    var choix1=document.getElementById('choix1');
    var choix2=document.getElementById('choix2');
    var choix3=document.getElementById('choix3');
    var choix4=document.getElementById('choix4');

    var i =0;
    while(i<reponse.length){
    choix1.children[1].textContent=reponse[0][0];
    choix2.children[1].textContent=reponse[0][1];
    choix3.children[1].textContent=reponse[0][2];
    choix4.children[1].textContent=reponse[0][3];
    reponse.shift();
    i++;
    }

}

function questionschange() {
    
    var question = document.getElementById('question');

    var i=0;
    while(i<questions.length){
        question.textContent=questions[0];
        questions.shift();
        i++;
    } 
    
}