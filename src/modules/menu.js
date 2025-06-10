  const menu = () => {
    
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')
    const menuItem = menu.querySelectorAll('li')

    const handleMenu = () => {
 
      menu.classList.toggle('active-menu')

    }

  
     
   menuItems.addEventListener('click', (e) =>  {
      if (e.target.tagName === 'LI') {
           menuBtn.addEventListener('click', handleMenu)
      } else {
        if (e.target.className === '.close-btn') {
          closeBtn.addEventListener('click', handleMenu)
        }
      }
   })
}


export default menu
