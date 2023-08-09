const saveBtn = document.getElementById('saveBtn')
const saveBtn1 = document.getElementById('saveBtn1')
const header = document.querySelector('header')
const shareBtn = document.getElementById('shareBtn')
const userBookmark = document.querySelector('.user-bookmark')
const finger = document.querySelector('.bi-fingerprint')
const closeFinger = document.querySelector('#closeBookmarkBtn')

let isUserBookmark = false
let storage = []

finger.addEventListener('click',bookmark)
closeFinger.addEventListener('click',bookmark)
function bookmark(){
    if (!isUserBookmark) {
        //userBookmark.style.display = 'block'
        finger.style.color = 'gold'
        console.log(finger.parentElement);
        userBookmark.style.height = '60vh'
        // userBookmark.style.bottom = '20px'
        userBookmark.style.border = '1px solid gray'
        document.body.style.overflow='hidden'
        isUserBookmark = true
        checkSaveBtn()
    }else{
        //userBookmark.style.display = 'none'
        finger.style.color = ''
        userBookmark.style.height = '0px'
        //userBookmark.style.bottom = '0px'
        userBookmark.style.border = 'none'
        document.body.style.overflow='scroll'
        isUserBookmark = false

        checkSaveBtn()
    }
}

function startLocalStorage(){
    
    if (localStorage.getItem('bookmarkList')) {
        

        const ol = document.querySelector('.user-bookmark ol')
        storage = JSON.parse(localStorage.getItem("bookmarkList"))
        ol.innerHTML = ''
        if(storage.length > 0){
            storage.forEach(item=>{
                checkSaveBtn()
                ol.innerHTML +=`
                    <li>
                        <a href="${item.url}">${item.title}</a>
                        <button class="trashBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                        </svg>
                        </button>
                    </li>
                `
                })
                refreshListennerTrash()
        }else{
            ol.innerHTML +=`
            <div style="font-size:20px;font-weight:bold;display:flex;align-items:center;justify-content:center;height:100px;color:gray;">
            No posts saved
            </div>
        `
        }
    
        
        
        

    }else{
      
        localStorage.setItem('bookmarkList',JSON.stringify(storage))
        
    }
}
startLocalStorage()

function saveStorage(data){
    
    storage = JSON.parse(localStorage.getItem("bookmarkList"))
    
    storage.push(data)
    
    localStorage.setItem("bookmarkList",JSON.stringify(storage))
    startLocalStorage()
    
}

function removeItemStorage(url){
    
    storage = JSON.parse(localStorage.getItem("bookmarkList"))
    let newStorage = []
    storage.map((item,i,arr)=>{
        if(item.url != url){
            console.log(item);
            newStorage.push(item)
        }
    })
    
    localStorage.setItem("bookmarkList",JSON.stringify(newStorage))

    startLocalStorage()
    refreshListennerTrash()
    
}
function refreshListennerTrash(){
    let trashList = document.querySelectorAll('.trashBtn')
    trashList.forEach(item=>{
        item.addEventListener('click',e=>{
           // console.log(item.parentElement.children[0].getAttribute('href'));
            const url = item.parentElement.children[0].getAttribute('href')
            removeItemStorage(url)
            checkSaveBtn()
        })
    })
}

refreshListennerTrash()

let prevValue = 0 ,nextValue
let bodyHeight = document.body.getBoundingClientRect().height
const bar = document.querySelector('.barContainer .bar')
window.addEventListener('scroll',()=>{
    nextValue = window.scrollY
    if(nextValue > 50){
        if(nextValue > prevValue){
            // visible header
          header.style.top='-100px'
        }else{
            // hidden header
            header.style.top='-1px'
        }
    }

    prevValue = nextValue

    bodyHeight = document.body.getBoundingClientRect().height
    let valueY = window.scrollY / ((bodyHeight - window.innerHeight) / 100)
    bar.style.width = valueY + '%'
})

document.querySelectorAll('.post').forEach(post=>{
    let h = post.querySelector('.post-title').textContent
     h = h.toLowerCase().replace(/\s/g, '-');
    
    post.addEventListener('click',()=>{
    console.log(h);
      let uri = "p/" + h
      window.location.assign(uri)

    })
})

shareBtn.addEventListener('click', async ()=>{
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
    .catch((er)=>{
      console.error(er)
    })
   } catch (error) {
    console.error(error)
   }
 
})

// checkin localStorage url

saveBtn.addEventListener('click',()=>{

        saveBtn.style.display = 'none'
        saveBtn1.style.display = 'block'
        


        const url = window.location.toString()
        const title = document.querySelector('.icerik h1').textContent
        const img = document.querySelector('.loadİmage').getAttribute('src')
        

        let bmData = {
            title : title,
            img: img,
            url:url
        }
        //console.log(bmData);

        saveStorage(bmData)
})
saveBtn1.addEventListener('click',()=>{

       
         saveBtn.style.display = 'block'
         saveBtn1.style.display = 'none'
        

        const url = window.location.toString()
        removeItemStorage(url)
   
})
function checkSaveBtn(){
    const url = window.location.toString()
    storage = JSON.parse(localStorage.getItem("bookmarkList"))
    
    for (let index = 0; index < storage.length; index++) {
        const item = storage[index];
        if(item.url == url){

            saveBtn.style.display = 'none'
            saveBtn1.style.display = 'block'
            break;
        }else{
            saveBtn.style.display = 'block'
            saveBtn1.style.display = 'none'
        }
        
    }
}
checkSaveBtn()



const callback = (entries) =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        entry.target.src = entry.target.dataset.src
        }
    })
}
const options = {
    rootMargin:"100px"
    
}

const observer = new IntersectionObserver(callback, options)

let images = document.querySelectorAll('.image')
images.forEach((image)=>{
    observer.observe(image)
})





