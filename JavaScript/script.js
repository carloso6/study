
var a1 = false
var b2 = false
var c3 = false
var d4 = false
    function resultado1(){
    var radio1 = document.getElementsByName("questao1");
    for (var i = 0; i < radio1.length; i++) {
        if (radio1[3].checked) {
            console.log('Certo!')
           // questao14.style.backgroundColor = "green"    
            a1 = true       
        }
        else if (radio1[0].checked){ 
            console.log('Errado!')
            questao11.style.backgroundColor = "red"
        }
        else if (radio1[1].checked){
            console.log('Errado!')
            questao12.style.backgroundColor = "red"
        }
        else if (radio1[2].checked){  
            console.log('Errado!')            
            questao13.style.backgroundColor = "red"
        }
        else if (radio1[4].checked){ 
            console.log('Errado!')              
            questao15.style.backgroundColor = "red"
        }
    }
}
    function resultado2(){
    var radio2 = document.getElementsByName("questao2");
    for (var i = 0; i < radio2.length; i++) {
        if (radio2[0].checked) {
            console.log('Certo!')
           // questao21.style.backgroundColor = "green" 
            b2 = true           
        }
        else if (radio2[1].checked){
            console.log('Errado!')
            questao22.style.backgroundColor = "red"
        }
        else if (radio2[2].checked){
            console.log('Errado!')
            questao23.style.backgroundColor = "red"
        }
        else if (radio2[3].checked){
            console.log('Errado!')
            questao24.style.backgroundColor = "red"
        }
        else if (radio2[4].checked){
            console.log('Errado!')
            questao25.style.backgroundColor = "red"
        }
    }
}
    function resultado3(){
    var radio3 = document.getElementsByName("questao3");
    for (var i = 0; i < radio3.length; i++) {
        if (radio3[4].checked) {
            console.log('Certo!')
           // questao35.style.backgroundColor = "green"
            c3 = true  
        }
        else if (radio3[1].checked){
            console.log('Errado!')
            questao32.style.backgroundColor = "red"
        }
        else if (radio3[2].checked){
            console.log('Errado!')
            questao33.style.backgroundColor = "red"
        }
        else if (radio3[3].checked){
            console.log('Errado!')
            questao34.style.backgroundColor = "red"
        }
        else if (radio3[0].checked){
            console.log('Errado!')
            questao31.style.backgroundColor = "red"
        }
    }
}
    function resultado4(){
        if(document.getElementById('resposta42').checked && (document.getElementById('resposta43').checked && 
        (document.getElementById('resposta45').checked))){
            console.log('Certo!')
           // questao42.style.backgroundColor = "green"
           // questao43.style.backgroundColor = "green"
           // questao45.style.backgroundColor = "green"
            d4 = true  
        }
            else if(document.getElementById('resposta41').checked){
                console.log('Errado!')
                questao41.style.backgroundColor = "red"
        }
            else if(document.getElementById('resposta44').checked){
                console.log('Errado!')
                questao44.style.backgroundColor = "red"
    }
}
    function resultado5(){
        document.getElementById('questao51').innerHTML = 'Resposta Esperada: Sem frameworks o desenvolvimento web seria lento e sem muitas features que temos, seria muito mais codigo, coisas que frameworks auxiliam na redução de codigo e ganho de tempo'
    }
    function final(){
            if (a1 == true && b2 == true && c3 == true && d4 == true) {
                window.location.href = "resultado.html";    
            } else {
                console.log('tente de novo')   
            }
    }
    

    
    
