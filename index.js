const radioeur = document.querySelector('#eur');
const radiofrf = document.querySelector('#frf');
const p = document.createElement('p');
const result = document.querySelector('#result');

function convert(){
    
    if(document.querySelector('#amount').value == ""){
        alert('Veuillez saisir un montant')
    }
    else{
        valuer=document.querySelector('#amount').value
        if(radioeur.checked){
            console.log(valuer)
            a = valuer*0.15
            console.log(a)
            result.innerText = `Resultat de FRF à € : ` +a.toFixed(2)
            console.log('test')
        }
        else if (radiofrf.checked){
            a= valuer*6.55957 
            result.innerText = `Resultat de € à FRF : ` +a.toFixed(2)
        }
        else{
            alert('Veuillez selectionnez une deivse')
        }
    }
    
    
}