var count = 0;


function increment(){
    count++;
    alert(count)
}

document.getElementById('myButton').addEventListener('click', increment);