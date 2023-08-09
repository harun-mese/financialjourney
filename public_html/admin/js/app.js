const menuBtn = document.getElementById('menuBtn')
const menuBox = document.getElementById('toggleMenu')

menuBtn.addEventListener('click',toggleMenu)
let isOpen = false
function toggleMenu(){
    if (isOpen) {
        menuBox.style.width = '0px'
        isOpen = !isOpen
    }else{
        menuBox.style.width = '180px'
        isOpen = !isOpen
    }

}

const postTitle = document.getElementById('title')
const postDesc = document.getElementById('description')
const postKeyword = document.getElementById('keywords')
const postImg = document.getElementById('selectedImage')

const publisBtn = document.getElementById('publisBtn')

publisBtn.addEventListener('click',()=>{

      var data = {
        title: postTitle,
        desc: postDesc,
        keywords: postKeyword,
        content: editor.innerHTML,
        img:postImg.files[0],
        postcategory:'biografies'
      };

      $.ajax({
        type: "POST",
        url: "kayit.php",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function(response) {
          alert(response);
        }
      });

})
