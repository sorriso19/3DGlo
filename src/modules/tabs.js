const tabs = () => {
    const tabPanel = document.querySelector('.service-header')
    const tabs = document.querySelectorAll('.service-header-tab')
    const tabContent = document.querySelectorAll('.service-tab')

   tabPanel.addEventListener('click', (e) => {
        console.log(e.target);
   })
    
}

export default tabs