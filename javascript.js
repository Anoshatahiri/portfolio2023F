console.log('wassup');


const buttonAlert = () => {
    alert("Portfolio");
} 
const HoverButton = document.getElementById("btn-alert");
HoverButton.onmouseover = () => {
    HoverButton.innerText = "lorem ipsum";
};
HoverButton.onmouseleave = () => {
    HoverButton.innerText = "hover button";
};

let count = 1;
let text = document.getElementById("counterText");
document.getElementById("buttonCounter").onclick = () => {
    count++;
    document.getElementById("counterText").innerHTML = count;
    
    if ((count%2) == 0) {
        text.style.color = "purple";
    }

    else {
        text.style.color = "lime";
    }
}
 