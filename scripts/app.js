
numberInput= document.querySelector("#numberInput");
console.log(numberInput);
numberInput.addEventListener('input',()=>{
    console.log(numberInput.value);
    if(numberInput.value <= -10||numberInput.value >= 10){
        alert('The number should be between -10 and 10');
    }

});
const fruit={
    Name: 'Apple',
    color:'Red',
    Taste:'Sweet'
};
document.querySelector('#fruitName').innerHTML=`Name: ${fruit.Name}`;
document.querySelector('#fruitColor').innerHTML=`color: ${fruit.color}`;
document.querySelector('#fruitTaste').innerHTML=`Taste: ${fruit.Taste}`;