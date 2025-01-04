//show active link
const items=document.querySelectorAll('.nav-link')
items.forEach((item)=>{
    item.addEventListener('click',function(){
        items.forEach((link) => link.classList.remove('active'));
        item.classList.add('active')
    })
   
})
//tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})