const radioeur = document.querySelector('#eur');
const radiofrf = document.querySelector('#frf');
const valuer = document.querySelector('#amount').value;
const p = document.createElement('p');

function convert(){
    if(radioeur.checked){
        p.innerText= `Resultat de FRF à € : ` 
        console.log('test')
    }
    else if (radiofrf.checked){
        console.log(radiofrf.value)
    }
    else{
        alert('Veuillez selectionnez une deivse')
    }
    
}