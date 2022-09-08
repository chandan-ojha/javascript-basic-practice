const display = document.getElementById("display");

function getData(){
    fetch("http://localhost:63342/practice_4/data.txt")
            .then(res => res.text())
            .then(data => {
                display.innerText = data;
            });
}