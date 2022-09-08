const display = document.getElementById("display");

async function getData(){
    const res = await fetch("http://localhost:63342/practice_4/data.txt")
    const data = await res.text();

    display.innerText = data;
}