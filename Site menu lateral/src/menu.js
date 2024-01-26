var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item) => 
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click',selectLink)
)

function expandMenu() {
    document.querySelector('.menu-lateral').classList.add('expandido');
  }
  
  function collapseMenu() {
    document.querySelector('.menu-lateral').classList.remove('expandido');
  }