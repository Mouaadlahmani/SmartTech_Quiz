

// --------Page Quiz--------


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
var questions=["before he could start applying for jobs, he needed to ___ his resume.",
              "Can you take it to the ___? Peter is in there, cooking dinner.",
              "Juan was a very competent manager, but he ___ with time-keeping.",
              "? + 39 = 32","6 + ? = 19", "2 + ? = 51", "21 + ? = 40", "Quelle est la syntaxe correcte pour faire référence à un script externe appelé « myscript.js »?",
              "Quel est le bon endroit pour insérer un code JavaScript?",
              "Une page conçue en HTML s’appelle ___",
              "Un document HTML est enregistré avec l’extension .",
              "CSS est un acronyme pour ___",
              "DNS traduit __",
              "String en Java est ___",
              "Laquelle de ces méthodes de la classe String est utilisée pour obtenir le caractère à l’index spécifié?"];
var reponse=[["back up","fill in", "update"],["breakfast nook","dining room", "kitchen"],["interfered", "struggled", "collided"],
 ["-7", "-24","10"], ["5", "13", "-2"], ["48", "65","49"], ["19", "18", "7"],["<script href='myscript.js'>","<script name='myscript.js'>","<script src='myscript.js'>"],
 ["La section <head>","Les deux sections <head> et <body> sont correctes","La section <body>"],
 ["Page de garde","Front-end","Page Web"],
 [".htl",".html",".hml"],
 ["Cascading Style Sheet","Costume Style Sheet","Cascading System Style"],
 ["le nom de domaine en adresse IP"," l’adresse IP en nom de domaine","Les deux A et B sont vrais."],
 ["une classe"," un objet","une variable"],
 ["charAt()","Charat()","char()"]];

var choix1=document.getElementById('choix1');
var choix2=document.getElementById('choix2');
var choix3=document.getElementById('choix3');
var question=document.getElementById('question');

    function Next(){

      if(questions.length==0 && reponse.length==0){
        return;
      }
        if(reponse.length > 0){

            question.textContent=questions[0];

            choix1.children[1].textContent=reponse[0][0];
            choix2.children[1].textContent=reponse[0][1];
            choix3.children[1].textContent=reponse[0][2];
            reponse.shift();
            questions.shift();
          }

 }
