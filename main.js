const inputs = document.querySelectorAll('.percent label input');
const custom1label = document.getElementById('customLabel')
const custom2label = document.getElementById('custom2Label')
const custom1 = document.getElementById('custom')
const custom2 = document.getElementById('custom2')
const tipPerson = document.getElementById('tipPerson')
const totalPerson = document.getElementById('totalPerson')
const bill = document.getElementById('bill')
const people = document.getElementById('people')

const clickTip = ({target : e}) =>{
    if(e.checked){
        if(e.id === 'custom'){
            custom1.value=''
            custom2.value='';
            custom1label.hidden = true
            custom2label.hidden = false
            custom2.focus()
        }
        else{
            custom1label.hidden = false
            custom2label.hidden = true
        }
        inputs.forEach(e=>e.parentElement.classList.value = '')
        e.parentElement.classList.add('labelChecked')
    }
}

const keyUpCustom = () =>{
    custom1.value = custom2.value*0.01
    console.log(custom1.value)
}

const totalShow = () =>{
    let tip;
    inputs.forEach(e=>e.checked ? tip = e: null)

    if(bill.value && people.value && tip.value){
        tipPerson.textContent = (bill.value /  people.value * tip.value).toFixed(2)
        totalPerson.textContent = ((bill.value /  people.value) + (bill.value /  people.value * tip.value)).toFixed(2)
    }else{
        tipPerson.textContent = '0.00';
        totalPerson.textContent = '0.00';
    }
} 

const reset = () =>{
    tipPerson.textContent = '0.00'
    totalPerson.textContent = '0.00'
    bill.value = ''
    people.value = ''
    custom1label.hidden = false
    custom2label.hidden = true
    custom2.value=''
    custom1.value=''
    inputs[0].checked = true
    inputs.forEach(e=>e.parentElement.classList.value = '')
    inputs[0].parentElement.classList.add('labelChecked')
}

inputs.forEach(e => {
    e.addEventListener('click', clickTip)
    e.addEventListener('click', totalShow)
});

document.addEventListener('keyup', totalShow)

