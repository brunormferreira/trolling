const titleNode = document.querySelector('.troll')
const divNode = document.querySelector('div')
const buttonNode = document.querySelector('button')

const prepareTroll = () => {
  titleNode.classList.toggle('intensifies')
  moreTroll()
}

const executeTroll = () => {
  return titleNode.addEventListener('click', prepareTroll)
}

const moreTroll = () => {
  const title = document.createElement('h1')
  title.textContent = `EU AVISEEEEEEEI!!! JAFHASHKEHÇHFAHOAHSOHOHUA 
  JAFHASHKEHÇHFAHOAHSOHOHUA JAFHASHKEHÇHFAHOAHSOHOHUA 
  JAFHASHKEHÇHFAHOAHSOHOHUA JAFHASHKEHÇHFAHOAHSOHOHUA`
  title.classList.add('animated')
  title.classList.add('intensifies')
  divNode.appendChild(title)
}

const reloadTroll = () => {
  window.location.reload()
}

const actionReload = () => {
  buttonNode.addEventListener('click', reloadTroll)
}

const playApp = () => {
  executeTroll()
  actionReload()
}

playApp()