var ageClass = function(age){
  age = Number(age);
  if(age % 1 !== 0 || age === NaN){
    alert("Ingresa tu edad con un número entero");
    return"";
  }
  if(age >=1 && age <=3){
    return "Toddler";
  }else if(age <=5){
    return "Preeschooler"
  }else if(age <=12){
    return "Gradeschooler"
  }else if( age <=18){
    return "Teenager"
  }else if(age <=21){
    return "Young adult"
  }else{
    return "Adult"
  }
//cómo invocar la función
var userInput = prompt("Ingresa tu edad");
var classi = ageClass(userInput);
alert(classi);
