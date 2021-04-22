function verif(){
    let x =document.getElementById("phrase").value
  let y=/\s/
  let res=y.test(x)
  document.getElementById("reponce").innerHTML=res
  }

/***********ex2**************** */
function vowels(str){
    let pattern =/[a e i o u y]/gi
    let found = str.match(pattern);
    if(found== null)
    return 0 ;
    else
    return found.length;
} 
console.log(vowels("mahdi"));
/***********ex3******************** */
function vowelCont(mot, sym){

    return mot.replace(/[aeiuo]/gi,sym)
  }
  console.log(vowelCont("ayaa eyhdida", "#"));
  /************ex4********************** */
  function mathExp(str)
{
let pattern=/^[0-9][+,-,/,*][0-9]/;
return pattern.test(str);

}
console.log(mathExp('4+5'));
/**************ex5******************* */


    
    