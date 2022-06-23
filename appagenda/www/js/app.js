function salvarContato(){
  let inputNome = document.querySelector('[data-input-nome]')
  let inputTelefone = document.querySelector('[data-input-tel]')
  let novoContato = (document.querySelector(
    '[data-contatos-salvos]'
  ).innerHTML = `
  <li class="list-group-item">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
      Nome: ${inputNome.value} -
      Telefone: ${inputTelefone.value}    
    </a>
  </li>
   `)
   localStorage.listaContatos = novoContato
}

//botão SALVAR
document.querySelector('[data-salvar]').addEventListener('click', () => {
  salvarContato()
 
})

//Local Storage
if (localStorage.listaContatos) {
  document.querySelector('[data-contatos-salvos]').innerHTML =
    localStorage.listaContatos
}

function limparStorage(){
  localStorage.clear()
  
}


//Limpar localStorage
document.querySelector('[data-limpar]').addEventListener('click',() =>{
  limparStorage()
  document.querySelector( '[data-contatos-salvos]').remove()
 
})