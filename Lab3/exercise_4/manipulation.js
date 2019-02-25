function border() {
    let r = document.getElementById("red").value;
    let g = document.getElementById("green").value;
    let b = document.getElementById("blue").value;
    let bd = document.getElementById("bordr").value;

    let strA = bd + 'px';
    let strB = 'rgb(' + r +','+ g +','+ b + ')';

    p.style.borderStyle = 'solid';
    p.style.borderWidth = strA;
    p.style.borderColor = strB;
    
}

function background() {
    let r = document.getElementById("red1").value;
    let g = document.getElementById("green1").value;
    let b = document.getElementById("blue1").value;
    
    p.style.backgroundColor = 'rgb(' + r +','+ g +','+ b + ')';
}