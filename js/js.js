let btn = document.querySelector('.btn')
btn.addEventListener('click',function (event){
    event.target.parentElement.classList.toggle('sidebar--open')
})