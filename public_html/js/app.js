

const userBookmark = document.querySelector('.user-bookmark')
const finger = document.querySelector('.bi-fingerprint')
const closeFinger = document.querySelector('#closeBookmarkBtn')
let isUserBookmark = false

finger.addEventListener('click',bookmark)
closeFinger.addEventListener('click',bookmark)

function bookmark(){
       if (!isUserBookmark) {
           
            finger.style.color = 'gold'
            console.log(finger.parentElement);
            userBookmark.style.height = '60vh'
            userBookmark.style.border = '1px solid gray'
            document.body.style.overflow='hidden'
            isUserBookmark = true
        }else{
            //userBookmark.style.display = 'none'
            finger.style.color = ''
            userBookmark.style.height = '0px'
            //userBookmark.style.bottom = '0px'
            userBookmark.style.border = 'none'
            document.body.style.overflow='scroll'
            isUserBookmark = false
        }
}

function startLocalStorage(){
    
    if (localStorage.getItem('bookmarkList')) {
        
        const ol = document.querySelector('.user-bookmark ol')
        storage = JSON.parse(localStorage.getItem("bookmarkList"))
        ol.innerHTML = ''
        if(storage.length > 0){
            storage.forEach(item=>{
                
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
           
        })
    })
}

refreshListennerTrash()


const header = document.querySelector('header')
let bodyHeight = document.body.getBoundingClientRect().height
const bar = document.querySelector('.barContainer .bar')

let prevValue = 0 ,nextValue
window.addEventListener('scroll',()=>{
    nextValue = window.scrollY
     if (nextValue > 50){
        if(nextValue > prevValue){
        
          header.style.top='-100px'
          
        }else{
            
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
   
      let uri = "p/" + h
      window.location.assign(uri)

    })
})

const tabBtns = document.querySelectorAll('.tab-menu button')
tabBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        
        tabBtns.forEach(x=>{
            x.classList.remove('active')
        })
        e.target.classList.toggle('active')

        e.preventDefault()
           //window.location.assign(e.target.innerText.toLowerCase())
           history.replaceState(null, 'deneme', e.target.innerText.toLowerCase());
        
    })

})

function tabMenuActive(active){
   
    if(active != undefined){
        

        tabBtns.forEach((a)=>{
           
            if (a.innerText.toLowerCase() == active)  {

                tabBtns.forEach(x=>{
                    x.classList.remove('active')
                })

                a.classList.toggle('active')
            }
        })
            
    }else{
        console.log(tabBtns[0]);
        tabBtns[0].classList.toggle('active')
    }
    
}

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

const images = document.querySelectorAll('a img')
images.forEach((image)=>{
    observer.observe(image)
})


const leftCont = document.querySelector('.leftContainer')
const right = document.querySelector('.containerS .right')

const main = document.querySelector('main')

let postCount = 0

function getData(category,start = 0, bool = false) {
  const  moreButton = document.getElementById('moreBtn')
    if (bool) {
        $.ajax({
            url: "/get_category_posts.php", // PHP dosyasının yolu
            type: "GET", // Veri gönderme yöntemi
            dataType: "html", // Cevap türü
            data: { category: category, start: start, limit: 10 },
    
            success: function(response) {

                console.log(moreButton);
                main.removeChild(moreButton)
                
                main.innerHTML += response
                main.innerHTML += `<button id="moreBtn" onclick="moreBtn()">More</button>`
                postCount += 10
            }
    
        });
    }else{
        $.ajax({
            url: "/get_category_posts.php", // PHP dosyasının yolu
            type: "GET", // Veri gönderme yöntemi
            dataType: "html", // Cevap türü
            data: { category: category, start: start, limit: 10 },
    
            success: function(response) {
               
                main.innerHTML = ''
                main.innerHTML += response
                main.innerHTML += `<button id="moreBtn" onclick="moreBtn()">More</button>`
               console.log(response);
               postCount += 10
               console.log(postCount, 'sayfa ilk yuklendigin') ;
            }
    
        });
    }
    
}

function moreBtn(){
console.log(postCount);
    let u = window.location.toString()
    let cate = u.split('/')
    let categoryOnload = cate[cate.length - 1]
    getData(categoryOnload,postCount,postCount * 2, true)
    
}


const ancorList =document.querySelectorAll('.tab-menu button')
ancorList.forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault()
        postCount = 0
        let category = e.target.innerText.toLowerCase()
        console.log(category.toLowerCase())
    
        if(category != 'home'){
            getData(category,0)
        }else{
            main.innerHTML = homeHtml()
        }
      
    })
})

window.onload = ()=>{
 
    let u = window.location.toString()

    let cate = u.split('/')
    let categoryOnload = cate[cate.length - 1]

    console.log(cate[cate.length - 1]);

    if(categoryOnload == 'home' || categoryOnload == ''){

        main.innerHTML = homeHtml()
    tabMenuActive('home')
    }else if(categoryOnload == null || categoryOnload == undefined ){
        main.innerHTML = homeHtml()
    tabMenuActive('home')
    }
    else{
        getData(categoryOnload,0)
        tabMenuActive(categoryOnload)
       
    }
    
}

function homeHtml(){
    return `<h1>Step 1: Assess Your Financial Situation</h1>
    <p>Before embarking on your financial journey, it's important to assess your current situation. Gather all your financial information such as income, expenses, debts, and assets. This step is essential to understand where you stand.</p>
    
    <h1>Step 2: Set Goals</h1>
    <p>Set short, medium, and long-term financial goals. Setting goals like emergency savings, home purchase, and retirement can help boost your motivation.</p>
    
    
    <h1>Step 3: Create a Budget</h1>
    <p>Creating a budget helps you balance your income and expenses. List your income in detail and allocate your expenses into categories like essential needs, savings, and entertainment.</p>
    
    
    <h1>Step 4: Manage Debts</h1>
    <p>Review your existing debts and create a repayment plan. Paying off debts is a crucial part of building a better financial future.</p>
    
    
    
    <h1>Step 5: Build an Emergency Fund</h1>
    <p>Create an emergency fund for unexpected events. It's wise to save an amount that can cover 3 to 6 months' worth of living expenses.</p>
    
    
    <h1>Step 6: Invest Your Money</h1>
    <p>Consider investing your money effectively to grow and expand it. By allocating funds to investment instruments aligned with your risk tolerance, you can ensure future financial security.</p>
    
    
    <h1>Step 7: Retirement Planning</h1>
    <p>Setting an early retirement goal can provide long-term financial security. Plan for your retirement years through retirement funds or investments.</p>
    
    
    <h1>Step 8: Financial Education</h1>
    <p>Utilize resources to enhance your financial knowledge. Improve your financial literacy through books, articles, seminars, or online courses.</p>
    
    
    <h1>Step 9: Track and Update Progress</h1>
    <p>Regularly monitor your progress towards your set goals. Update your plan and remain flexible when changes occur in your financial situation.</p>
    
    
    <h1>Step 10: Build a Community</h1>
    <p>Share your financial journey with like-minded individuals. Create a support network by sharing your experiences, success stories, and challenges.</p>`
}
