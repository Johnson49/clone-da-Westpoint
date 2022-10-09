var content = "digital";


// var words = ["digital", "QUALITY", "YOUR MVP", "EXPERTISE", "RESILIENCE"]
var words = ["digital","digital", "quality", "your mvp", "expertise", "resilience"]

var text = document.getElementById('efeito-type');

var speed = 600;
var cont = 0;


var outro = 0;


function typeWriter () {

  if(cont < content.length){
    text.textContent += content.charAt(cont);
    cont++;
    setTimeout(typeWriter, speed);

    if (outro === 5) outro = 0;

  }else{
    outro++;
    content = words[outro]
    text.textContent = '';
    cont = 0;
    typeWriter();


  }


}

typeWriter();


