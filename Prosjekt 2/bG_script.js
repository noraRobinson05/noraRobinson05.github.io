const canvas = document.getElementById("Bakgrunn"); /* oppretter en konstant variabel "canvas" og tilordner verdien av HTML-elementet med id = "Bakgrunn", som skal være en <canvas> -element */
const context = canvas.getContext("2d"); /* Dette oppretter en konstant variabel "context" og tilordner en 2D-tegnekontekst til canvasen */

canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
/* tilordner bredden og høyden til canvasen til å være henholdsvis vindusbredden og vindushøyden. Dette sikrer at cansvasen tar opp hele vinduet */

const strøssel = "﹆" /* symbolene skal forestille strøssel */
const strøssel2 = "✔︎"
/* oppretter to konstanter variabler som inneholder symboler som faller nedover i animasjonen */

const alphabeth = strøssel + strøssel2 /* kombinerer "strøssel" og "strøssel2" */
const fontSize = 10;
const columns = canvas.width/fontSize /* oppretter en konstant variabel "colums" og tilordner verdien av bredden til canvasen delt på størrelsen på fonten */

const rainDrops = []; /* oppretter en tom liste som sener vil bli brukte til å lagre informasjon om posisjonen til symbolene som faller nedover */
console.log(rainDrops)
for (let x = 0; x < columns; x++){ /* en løkke som går gjennom hver kolonne i animasjonen */
    
    rainDrops.push(Math.ceil(canvas.height/fontSize));
}
//console.log(rainDrops)

function draw(){
    context.fillStyle = "rgba(250, 250, 250, 0.10)";
    context.fillRect(0,0,canvas.width,canvas.height)


    context.fillStyle = "rgb(250,0,0)"
    context.font = fontSize + "px monospace"
    for (let i = 0; i < rainDrops.length; i++){
        
        let x = i * fontSize
        let y = rainDrops[i] * fontSize
        let randomIndex = Math.floor(Math.random() * alphabeth.length)
        console.log(randomIndex)
        let letter = alphabeth[randomIndex]

        context.fillText(letter,x,y)

        rainDrops[i]++

        let terning = Math.random();
        if (y > canvas.height && terning < 0.05){
            rainDrops[i] = 0;
        }
    }

}

setInterval(draw, 50)


window.addEventListener('resize', lastInn)

function lastInn(){
    /* setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, 10) */
    window.location.reload()
}