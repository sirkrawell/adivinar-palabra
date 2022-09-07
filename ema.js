let arreglo = ["coche","computadora","teclado","camisa","raton","mesa","a"]
let mensajes = [["bien hecho", "buen trabajo", "has acertado","excelente trabajo","Grandioso","Esplendido","none"],["eres una basura","a nadie le importas","bastardo, ni ganar esta cosa sabes","y yo que creia que el que programo esta basura era bien pendejo, hasta que te conoci...","jsjsjs que idiota","No lo puedo creer...","Es enserio...","none"]]

console.log(mensajes[0].length)
function restart () {  //Con esta funcio reinicio todo
	let palabra = [] //El arreglo que contendra la palabra, osea cada elemento para cada letra

	let cajaDeLetras = document.getElementById("cajaDeLetra")
	cajaDeLetras.innerHTML=""
	let e = Math.trunc(Math.random()*6)   //Numero aleatoria que selecciona el elemento del arreglo
	let cantidadDeElementos = arreglo[e].length //No se por que hice esto jsjs
	let aprobo = false
	let $mensaje = document.getElementById("mensaje__txt")


function seCreanLosDivs () {
	for(let i=0; i<cantidadDeElementos; i++) {

	palabra[i] = document.createElement("div")
	palabra[i].setAttribute("class","cajaDeLetras__letra")
	palabra[i].innerHTML= `<span>?</span>`

	cajaDeLetras.append(palabra[i])
}
}

seCreanLosDivs()

let intentosContador = 0 // Esto se mostrara en la tabla, son los intentos del usuario

let contadorPalabra = 0  // Para saber si la comparacion entre los input del usuario son iguales a las letras de la palabra
						// asi sabre si la persona gano

let maxIntentos = cantidadDeElementos * 2 // Numero maximo de intentos por palabra

let $intentos = document.getElementById("intentos")
let $letraPulsada = document.getElementById("letras_pulsadas")

let $cajaDeLetrass = []

document.addEventListener("keydown", (event)=> {
	let palabraParaAdivinar = arreglo[e].split("")
	let letraUsuario = event.key
	
	

	for (let i=0; i<palabra.length; i++) {
		if (event.key == palabraParaAdivinar[i]) {
			contadorPalabra++
			palabra[i].classList.add("caja_contador_estilos", "cajaDeLetra--giro")
			palabra[i].innerHTML = `<span>${event.key}</span>`
			
		}

		 if (intentosContador > maxIntentos && aprobo==false) {
				for (let i=0; i<palabra.length; i++) {
					contadorPalabra++
					palabra[i].classList.remove("cajaDeLetras__letra--verde")
					palabra[i].classList.add("cajaDeLetras__letra--rojo", "cajaDeLetra--giro")
					palabra[i].innerHTML = `<span>${palabraParaAdivinar[i]}</span>`
					$mensaje.innerHTML = mensajes[1][e]
			
	}
		}

		else if (palabraParaAdivinar.length == document.getElementsByClassName("caja_contador_estilos").length) {	
			palabra.forEach( (e)=> {e.classList.add("cajaDeLetras__letra--verde")})	
			aprobo =true	
			$mensaje.innerHTML = mensajes[0][e]

			}
	}
	intentosContador++
	$intentos.innerHTML = intentosContador  //Este contador es el que se muestra en la tabla de intentos
	$letraPulsada.innerHTML = `${event.key}` //Este 

})

}

restart()  // aqui intentaba crear un boton para reiniciar el juego
$btnReiniciar = document.getElementById("btn-reiniciar")
$btnReiniciar.addEventListener("click", () => {
	restart()
	
	
})









