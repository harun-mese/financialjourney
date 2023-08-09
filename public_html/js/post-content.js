

const userBookmark = document.querySelector('.user-bookmark')
const finger = document.querySelector('.bi-fingerprint')
const header = document.querySelector('header')

const shareBtn = document.getElementById('shareBtn')
const saveBtn = document.getElementById('saveBtn')



// checkin localStorage url
let checkBookMark = false
saveBtn.addEventListener('click',(e)=>{
    if(checkBookMark){
        e.target.style.color = 'black'
       // delete localStorage url


        checkBookMark = false
    }else{
        e.target.style.color = 'red'
        // save localStorage url
        checkBookMark = true
    }
   
   
})
shareBtn.addEventListener('click', async (e)=>{
    const data = {
        title :'merhaba',
        text: 'hey su harika seye bak!',
        url :  window.location.href
    }
   try {
    
   await navigator.share(data)
    .then(()=>{
      console.warn('basardin')
    })
    .catch(()=>{
      console.error('olmadi')
    })
   } catch (error) {
    console.error('olmadi')
   }
      
})




let isUserBookmark = false

finger.addEventListener('click',()=>{
    if (!isUserBookmark) {
        userBookmark.style.height = '60vh'
        document.body.style.overflow='hidden'
    
        isUserBookmark = true
    }else{
        
        userBookmark.style.height = '0'
        document.body.style.overflow='scroll'

        isUserBookmark = false
        
    }
    
})



let prevValue = 0 ,nextValue
window.addEventListener('scroll',()=>{
    nextValue = window.scrollY
    if(nextValue > 100){
     if(nextValue > prevValue){
        // visible header
      header.style.top='-100px'
    }else{
        // hidden header
        header.style.top='-1px'
    }   
    }
    
    prevValue = nextValue
})



const callback = (entries) =>{
    entries.foreach(entry=>{
        entry.target.src = entry.target.dataset.src
    })
}
const options = {
    rootMargin:"-50px"
    
}

const observer = new IntersectionObserver(callback, options)

let images = document.querySelectorAll('.image')
images.foreach((image)=>{
    observer.observe(image)
})










































































