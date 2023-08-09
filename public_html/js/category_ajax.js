

function getData(category = 'biography',start = 0, limit = 10) {
    
    $.ajax({
        url: "/get_category_posts.php", // PHP dosyasının yolu
        type: "GET", // Veri gönderme yöntemi
        dataType: "html", // Cevap türü
        data: { category: category, start: start, limit: limit },

        success: function(response) {
            const main = document.querySelector('main')
            main.innerHTML = ''
            main.innerHTML += response
           console.log(response);
        }

    });
}

//getData()


const ancorList =document.querySelectorAll('.tab-menu button')
ancorList.forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault()
        let category = e.target.innerText.toLowerCase()
        console.log(category.toLowerCase())
       getData(category,0,10)
    })
})