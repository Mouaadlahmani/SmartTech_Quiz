
"use strict"
//====================function de animation de pgogress=======================
var conteur=0;
var barprogres=document.querySelectorAll('.progress-stacked') ;

function pgogress(cont){
    if(conteur==16){
      return;
    }
      barprogres.forEach(element=>{
      element.children[cont].classList.add('active');
       conteur++;
   });
    
    }

  //============ pour remplir la value de input par le continu de label si on clique sur reponse================
   var inputvalue=false;
   var responseFinal;
   var valuebutton=document.querySelectorAll('.card div');
   
        valuebutton.forEach(element=>{

        element.children[0].onclick=function(){
        this.value=element.children[1].textContent;
        responseFinal=element.children[1].textContent;
        colorCard.style.border="";
        inputvalue=true;
        // console.log(this.value);
      
    } 
   
  });

//===================function pour vider la value de  input si on clique sur next====================

    function viderinputRadio(){
       valuebutton.forEach(element=>{
    
        element.children[0].value="";
        element.children[0].checked=false;
        // console.log('les values des inputs es vide');
      });

    }



   //=================function pour changer entre les questions================
   var choix1=document.getElementById('choix1');
   var choix2=document.getElementById('choix2');
   var choix3=document.getElementById('choix3');
   var head_question=document.getElementById('head_question');

      var les_questions=["Une page conçue en HTML s’appelle _____",
                         "Quelle est la syntaxe correcte pour faire référence à un script externe appelé « myscript.js »?",
                         "Un document HTML est enregistré avec l’extension ____.",
                         "CSS est un acronyme pour _____",
                         "DNS traduit ______",
                         "String en Java est ______",
                         "Laquelle de ces méthodes de la classe String est utilisée pour obtenir le caractère à l’index spécifié?",
                         
                         "before he could start applying for jobs, he needed to _ his resume.",
                        "Can you take it to the _? Peter is in there, cooking dinner.",
                        "Juan was a very competent manager, but he _ with time-keeping.",
                        "In order to fint him, they needed to know his exact ___." ,

                        "3x + 4 = 10" ,
                        "2x - 8 = -2",
                        "5x = 25",
                        "-3x +x = 4"];
                         
                                 
      var les_choixs=[ ["Page de garde","Front-end","Page Web"], 
                      ["<script href='myscript.js'>","<script name='myscript.js'>","<script src='myscript.js'>"] ,
                      [".htl",".html",".hml"],
                      ["Cascading Style Sheet","Costume Style Sheet","Cascading System Style"],
                      ["le nom de domaine en adresse IP","l’adresse IP en nom de domaine","Les deux A et B sont vrais."],
                      ["une classe","un objet","une variable"],
                      ["charAt()","Charat()","char()"],
                     
                      ["back up","fill in", "update"],
                      ["breakfast nook","dining room", "kitchen"],
                      ["interfered", "struggled", "collided"],
                      ["location", "place", "site"],

                      ["x=1","x=2","x=3"],
                      ["x=-4","x=2","x=3"],
                      ["x=5","x=10","x=-5"],
                      ["x=2","x=-2","x=4"]];
                    


//=================function pour changer entre les questions================
 


      var reponses=[ "Page Web",
                    "Les deux sections <head> et <body> sont correctes",
                    ".html",
                    "<script src='myscript.js'>",
                    "Cascading Style Sheet",
                    "le nom de domaine en adresse IP",
                    "une classe",
                    "charAt()",

                    "location",
                    "fill in",
                    "kitchen",
                    "struggled",

                    "x=2",
                    "x=3",
                    "x=5",
                    "x=-2"];

    
         
            
//========fonction pur verifier est ce que le reponse est vrai ou faux=================
     
var NombreDeReponseCorect=0;
var NombreDereponseFaux=0;

function CalculerNombreReponse(){
      
        if(reponses.includes(responseFinal)){
            NombreDeReponseCorect++;
            console.log('vrai');
        }else{

          NombreDereponseFaux++;
          console.log('faux');
        }
}


var colorCard=document.getElementById('carde');

    function Next(){

        if(inputvalue==false){
         
          colorCard.style.border="2px solid red";
          return;
        }
     
         if(conteur==15){
           CalculerNombreReponse();
           pgogress(conteur);
           GotoResult();
           return;
         }

          CalculerNombreReponse();
          
           pgogress(conteur);

          if(les_choixs.length > 0){
      
           head_question.textContent=les_questions[0];

            console.log(les_choixs[0][0]);

            choix1.children[1].textContent=les_choixs[0][0];
            choix2.children[1].textContent=les_choixs[0][1];
            choix3.children[1].textContent=les_choixs[0][2];
            viderinputRadio();
           

             les_choixs.shift();
             les_questions.shift();
             inputvalue=false;
              } 
              
 }


//=================fonction pour go to result final===============
 function GotoResult(){ 
   localStorage.setItem("ReponseCorect",NombreDeReponseCorect);
   
   localStorage.setItem('ResponsrInncorect',NombreDereponseFaux);

   window.location.href="result.html";

}



  //============function de demarer le chrono==========
  var chrono=document.getElementById('chrono');

  var contenair=document.getElementById('container-lg');

  var minutes=15;
  var secondes=0;

  function demarerChrono(){
      if(minutes==0 && secondes==0){
          chrono.textContent="0"+minutes+":"+"0"+secondes;
          // console.log(chrono.textContent);
          GotoResult();
          return;
       }
      
         if(secondes<10){
              secondes="0"+secondes;
          }
          if(minutes<10){
              minutes="0"+minutes;
          }
      
          chrono.textContent=minutes+":"+secondes;
          // console.log(chrono.textContent);
      
           minutes=parseInt(minutes);
           secondes=parseInt(secondes);
       
          if(secondes==0 && minutes!=0){
              minutes --;
              secondes=60;
          }
      
          secondes--;
         
         setTimeout(demarerChrono,1000);
  }

  
//============affiche result final sur sur page result=================

var NbrCorect =localStorage.getItem('ReponseCorect');
var NbrFaux=localStorage.getItem('ResponsrInncorect');

var badycolor=document.getElementById('body');
var ReponseCorrect=document.getElementById('id_reponseCorrect');
var ReponseIncorrect=document.getElementById('id_reponseIncoorect');

ReponseCorrect.textContent=NbrCorect;
ReponseIncorrect.textContent=NbrFaux;

ReponseCorrect=parseInt(ReponseCorrect.textContent);

ReponseIncorrect=parseInt(ReponseIncorrect.textContent);

//=======pour colorer backround par apport a resultat===============
var filicitations=document.getElementById('Felicitations');
var Meilleure=document.getElementById('Meilleure');

if(ReponseCorrect>=12){
  badycolor.style.backgroundColor="#23E6B7";
  Meilleure.style.display='none';
}else{
  badycolor.style.backgroundColor='#D61355';
  filicitations.style.display='none';
}
  

 