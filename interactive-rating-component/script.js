function escolher(p) {
  //window.alert(`${p}`)
  var cor = document.getElementsByTagName('p')
  cor[p].style.backgroundColor = 'hsl(25, 97%, 53%)'
  cor[p].style.color = 'white'
  window.name = p
}

function votar() {
  var selecao = document.querySelector('div#selecao')
  selecao.innerHTML = `You selected ${[window.name]} out of 5!`
}
