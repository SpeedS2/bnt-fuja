function sim(){
 alert("Me Liga Novinha!") 
}
function desviar(t){
var btn = t
btn.style.position = 'absolute'
btn.style.bottom = geraPosicao(0, 50);
btn.style.left = geraPosicao(0, 100);
console.log("Não me pega");
}
function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + '%'
}
