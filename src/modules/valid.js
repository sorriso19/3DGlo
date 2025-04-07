const validate = () => {
    const items = document.querySelectorAll('.calc-item')
    let i;
    for (let i = 0; i < items.length; ++i){
        let calcItems = items[i]
        calcItems.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/^\D+$/g, "")
        })
    }
const userName = document.querySelectorAll(('[name="user_name"]'))
    userName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace()
        userName.forEach(element => {
            element.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/^[а-яА-ЯёЁ-\s]+$/g, "")
            })
        })
})
        const userEmail = document.querySelectorAll('.form-email')
        userEmail.forEach(el => {
            el.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/([^\w+@[a-zA-Z]+\-\.\~\*\!\'])+$/g, "")
                    
                
            })
        })

        const userTelephone = document.querySelectorAll('input[type="tel"]')
            userTelephone.forEach(elem => {
                elem.addEventListener('input', (e) => {
                    e.target.value = e.target.value.replace(/\d\(\)\-/g, "")
            })
        })
        const placeHolder = document.querySelector('[placeholder="Ваше сообщение"]')
                placeHolder.addEventListener('input', (e) => {
                    e.target.value = e.target.value.replace(/[^а-яА-ЯЁё-\s]+$/g, "")

        })
}

export default validate