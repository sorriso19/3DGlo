const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
     
     
            modal.style.display = 'block'
            modal.style.transform = 'translateX(100%)'
                let animation, count = 100
                    const transform = () => {
                        animation = requestAnimationFrame(transform)
                        count--
                        if(count >= 0) {
                            modal.style.transform = `translateX(${count}%)`
                        } else {
                            cancelAnimationFrame(animation)
                        }
                    }
                    buttons.forEach(btn => {
                        btn.addEventListener('click', () => {
                            if (document.body.clientWidth > 768) {
                                requestAnimationFrame(transform);
                              } else {
                                modal.style.transform = 'translateX(0)'
                              }
                            });
                          });
                
                    
                    closeBtn.addEventListener('click', () => {
                        count = 100
                        modal.style.transform = 'translateX(100%)'

            })

            modal()
          
        }
   
export default modal