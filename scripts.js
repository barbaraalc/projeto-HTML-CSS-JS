function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfpeople = document.getElementById('people').value;

    if (bill == '' | serviceQual == 0) {
        alert ("Por gentileza, preencha os valores")
        return;     
    }

    if (numOfpeople == ""| numOfpeople <= 1) {
        numOpeople = 1;
        document.getElementById('each').style.display = 'none'
         } else {
            document.getElementById ('each').style.display ='block'
         }

         let total = (bill * servicequal) / numOpeople;
         total = total.toFixed(2);
         document.getElementById('tip').innerHTML = total;
         document.getElementById('totalTip').style.display = "block";
}
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('TipsForm').addEventListener('formsubmit', calcular);