const bankDetailsForm = document.getElementById('bank-details')
const cardImgNumber = document.getElementById('card-img-number')
const cardImgHolder = document.getElementById('card-img-holder')
const cardImgExpirationMm = document.getElementById('card-img-mm')
const cardImgExpirationYy = document.getElementById('card-img-yy')
const submitBtn = document.getElementById('submit-btn')
const modal = document.getElementById('modal')
const continueBtn = document.getElementById('modal-continue-btn')


bankDetailsForm.addEventListener("submit", function(e){
    e.preventDefault()
})


bankDetailsForm.addEventListener("keyup", function(e){
    const informData = new FormData(bankDetailsForm)
    
    const cardNumber = informData.get('card-number')
    const cardName = informData.get('card-holder')
    const expirationMm = informData.get('expiration-mm')
    const expirationYy = informData.get('expiration-yy')

    if(cardNumber){
        cardImgNumber.innerText = cardNumber
    } else {
        cardImgNumber.innerText = "0000 0000 0000 0000"
    }

    if(cardName){
        cardImgHolder.innerHTML = cardName
    } else {
        cardImgHolder.innerHTML = "John Smith"
    }
    
    if(expirationMm){
        cardImgExpirationMm.innerText = expirationMm
    } else {
        cardImgExpirationMm.innerText = "00"
    }
    
    if(expirationYy){
        cardImgExpirationYy.innerText = expirationYy
    } else {
        cardImgExpirationYy.innerText = "00"
    }
    
})


submitBtn.addEventListener("click", function(){
    if(document.querySelector('input').value){
        bankDetailsForm.classList.add('hidden')
        modal.classList.remove('hidden')
        modal.classList.add('show')
        }
})


continueBtn.addEventListener("click", function(){
    bankDetailsForm.classList.remove('hidden')
   modal.classList.remove('show')
   modal.classList.add('hidden')
})
 