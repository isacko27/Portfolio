
    const carrusel = document.querySelectorAll(".c-box")
    const lArrow = document.querySelector(".c-right")
    const rArrow = document.querySelector(".c-left")
    let positions = ["123%","0%","-123%"]
    let actPos = "0%"

    const changePosition = (pos)=>{
        carrusel[1].style.transform = `translateX(${pos})`;
        carrusel[0].style.transform = `translateX(${pos})`;
        carrusel[2].style.transform = `translateX(${pos})`;
        return pos
    }

    rArrow.addEventListener('click',function() {
        if (actPos == positions[0]) {
            actPos = changePosition(positions[1])
        }
        else {
            actPos = changePosition(positions[2])
        }
        
    });

    lArrow.addEventListener('click',function() {
        if (actPos == positions[2]) {
            actPos = changePosition(positions[1])
        }
        else {
            actPos = changePosition(positions[0])
        }
    });

    console.log(carrusel)
