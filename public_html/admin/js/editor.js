
const editor = document.getElementById('editor')
const selectedImageInput = document.getElementById('selectedImage')

document.execCommand('defaultParagraphSeparator', false, 'p');
document.execCommand('insertBrOnReturn', false,false);

let bosPEtiketleri=[]
let ImgParams
let div

selectedImageInput.addEventListener('change',e=>{
console.log(selectedImageInput.files[0].name);


let label = document.querySelector('label[for=selectedImage]')
let createImage = new Image()
createImage.src = URL.createObjectURL(selectedImageInput.files[0]);
label.innerHTML= ''
label.appendChild(createImage)

})

addListenerAllBtns()

editor.addEventListener('keyup',(e)=>{
   
    if(e.key == "Enter"){
   
        var paragraphs = editor.getElementsByTagName("p");
        for (var i = 0; i < paragraphs.length; i++) {
          var paragraph = paragraphs[i];
          if (paragraph.innerHTML == '<br>') {
            paragraph.innerHTML = ""
          }
        }
        btnRemove()
        addListenerAllBtns()
   

    }else{
      btnRemove()
      addListenerAllBtns()
   
    }

   
})

function addListenerAllBtns(){
  
let params = []
 params = editor.querySelectorAll("#editor p")
    
  bosPEtiketleri=[]
  ImgParams = []

    params.forEach(param=>{
      
      if(param.innerHTML == ''){

         ImgParams.push(param)
         bosPEtiketleri.push(param.getBoundingClientRect())
        
      }
    })

    bosPEtiketleri.forEach((tag,i)=>{
     // const editor.container
      let y = tag.y + window.scrollY - 7  
      console.log(y);
      console.log(window.scrollY);
      btnAdding(tag.x, y ,i)
     
    })
     
      
}

function btnAdding(x,y,i){
  div = document.createElement('div')
  div.className='btn';
  div.style.top = y + "px";
  div.style.left = x - 1 + "px" ;
  div.setAttribute('index',i)

  div.addEventListener('click',(e)=> addBtnClicked(e))

 document.body.appendChild(div);
}

function btnRemove(){
var all = document.querySelectorAll('.btn')
all.forEach(x=>{
  document.body.removeChild(x)
})
//console.log('btn sil');

}

function addBtnClicked(e){

  const checkBtns = document.getElementById('btns')

if (checkBtns) {
  document.body.removeChild(checkBtns)

}
//else{
  const btns = document.createElement('div')
  const header = document.createElement('select')
  const ulListBtn = document.createElement('button')
  const olListBtn = document.createElement('button')
  const imgBtn = document.createElement('div')
  const unsplashBtn = document.createElement('button')
  const youtubeBtn = document.createElement('button')

ulListBtn.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      </svg>
`;
olListBtn.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                        <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
                      </svg>
`;
imgBtn.innerHTML=`
<input type="file" name="insertImg" id="insertImg" style="display:none;">
<label for="insertImg">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
</svg>
</label>
`;
unsplashBtn.innerHTML=`
<img width="20" height="20" src="../assets/unsplash.svg" />
`;
youtubeBtn.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg>
`;
header.innerHTML=`
  <option value="p">P</option>
  <option value="h1">H1</option>
  <option value="h2">H2</option>
  <option value="h3">H3</option>
`;

header.onchange = (event)=>{
  let index = e.target.getAttribute("index")
  console.log(event.target.value);

  let insert = document.createElement(event.target.value)
  insert.innerText = `Text`
  
  let focusParam = ImgParams[index]

  editor.replaceChild(insert, focusParam)
  hiddenFloatingBtn()
  console.log('change');
}
ulListBtn.onclick = ()=>{
  let index = e.target.getAttribute("index")

  let ul = document.createElement('ul')
  ul.innerHTML = `<li></li>`
  
  let focusParam = ImgParams[index]

  editor.replaceChild(ul, focusParam)
  hiddenFloatingBtn()
}
olListBtn.onclick = ()=>{
  let index = e.target.getAttribute("index")

  let ol = document.createElement('ol')
  ol.innerHTML = `<li></li>`
  
  let focusParam = ImgParams[index]

  editor.replaceChild(ol, focusParam)
  hiddenFloatingBtn()
}
imgBtn.onclick = ()=>{
  let index = e.target.getAttribute("index")
  let focusParam = ImgParams[index]

    var imgInput = document.getElementById("insertImg")
   
    imgInput.addEventListener('change',()=>{
    let _URL = window.URL || window.webkitURL;
    var imgHeight,imgWidth
    btnRemove()
    var selectedImage = new Image()

  
    var reader = new FileReader();
    
    reader.readAsDataURL(imgInput.files[0]);
    reader.onload = function (e) {
      btnRemove()
      var image = new Image();
    
      image.src = e.target.result;
      image.onload = function () {
         imgHeight = this.height;
         imgWidth = this.width;

         selectedImage.src = _URL.createObjectURL(imgInput.files[0]);
    var viewWidth = document.getElementById('editor').getBoundingClientRect().width
    var oran = imgWidth / imgHeight
    var imageHeight = viewWidth / oran

         selectedImage.height = imageHeight
         
         focusParam.replaceWith(selectedImage)
         let listOfEditor = editor.children
     let lastChildName = listOfEditor.item(listOfEditor.length - 1).tagName
     if(lastChildName == 'IMG'){
       let pTag = document.createElement('p')
       editor.appendChild(pTag)
       addListenerAllBtns()
     }
         addListenerAllBtns()
      };
    };


     let listOfEditor = editor.children
     let lastChildName = listOfEditor.item(listOfEditor.length - 1).tagName
     if(lastChildName == 'IMG'){
       let pTag = document.createElement('p')
       editor.appendChild(pTag)
       addListenerAllBtns()
     }
     addListenerAllBtns()
    })


  hiddenFloatingBtn()
  addListenerAllBtns()
}
unsplashBtn.onclick = (event)=>{
  let index = e.target.getAttribute("index")
  let focusParam = ImgParams[index]
 
  var inputUrlBox = document.createElement('div')
  inputUrlBox.id = 'inputUrlBox'
  inputUrlBox.classList.add('inputUrlBox')

  var inputUrl = document.createElement('input')
  inputUrl.placeholder = 'Url'

  var getUrlBtn = document.createElement('button')
  getUrlBtn.innerHTML=`
  <span style="margin-right: 10px;">Ok</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
      </svg>
  `
  getUrlBtn.onclick =async ()=>{
    var getUrl = inputUrl.value

    
       fetch(getUrl)
      .then((response) => {
        if (response.ok) {
          return response.blob()
        }
        let warning = document.querySelector('#inputUrlBox input')
        warning.setAttribute('placeholder','Enter a valid url address')
        warning.value=''
        warning.style.borderColor="red"
        warning.style.color="red"
        //alert('Enter a valid url address \n Geçerli bir url adresi girin')
        throw new Error('Enter a valid url address');
        
      })
      .then(blob => {
        var image = new Image();
        image.onload = function() {
            imgHeight = this.height;
            imgWidth = this.width;
    
            var img = new Image()
            img.src = getUrl
    
              var viewWidth = document.getElementById('editor').getBoundingClientRect().width
              var oran = imgWidth / imgHeight
              var imageHeight = viewWidth / oran
    
              img.height = imageHeight
              focusParam.replaceWith(img)
    
              let listOfEditor = editor.children
              let lastChildName = listOfEditor.item(listOfEditor.length - 1).tagName
              if(lastChildName == 'IMG'){
                let pTag = document.createElement('p')
                editor.appendChild(pTag)
                addListenerAllBtns()
              }
         }
         image.src = URL.createObjectURL(blob);
        hiddenFloatingBtn()
      }).catch(error => {
        throw(error);
    })
   
    //   btnRemove()
    //   var image = new Image();
    
    //   image.src = getUrl
    //   image.onload = function () {
    //      imgHeight = this.height;
    //      imgWidth = this.width;

    //      var img = new Image()
    //      img.src = getUrl

    // var viewWidth = document.getElementById('editor').getBoundingClientRect().width
    // var oran = imgWidth / imgHeight
    // var imageHeight = viewWidth / oran

    // img.height = imageHeight
    // focusParam.replaceWith(img)

    // let listOfEditor = editor.children
    // let lastChildName = listOfEditor.item(listOfEditor.length - 1).tagName
    // if(lastChildName == 'IMG'){
    //   let pTag = document.createElement('p')
    //   editor.appendChild(pTag)
    //   addListenerAllBtns()
    // }
    //      console.log('width:'+imgWidth + ' - height:' + imgHeight  + ' - oran:' + oran  + ' - image height:' + imageHeight);
    //   }
  
  }

  inputUrlBox.appendChild(inputUrl)
  inputUrlBox.appendChild(getUrlBtn)


  document.body.appendChild(inputUrlBox)
    
  
}
youtubeBtn.onclick = (event)=>{
  let index = e.target.getAttribute("index")
  let focusParam = ImgParams[index]
 
  var inputUrlBox = document.createElement('div')
  inputUrlBox.id = 'inputUrlBox'
  inputUrlBox.classList.add('inputUrlBox')

  var inputUrl = document.createElement('input')
  inputUrl.placeholder = 'Embed url...'

  var getUrlBtn = document.createElement('button')
  getUrlBtn.innerHTML=`
  <span style="margin-right: 10px;">Ok</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
      </svg>
  `
  getUrlBtn.onclick = ()=>{
    var getUrl = inputUrl.value.split('/')
    var i = getUrl.length - 1

    var frameBox = document.createElement('div')
    frameBox.innerHTML=`
    <iframe width="100%" height="220px" src="https://www.youtube.com/embed/${getUrl[i]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `

    focusParam.replaceWith(frameBox)
    hiddenFloatingBtn()
    let listOfEditor = editor.children
let lastChildName = listOfEditor.item(listOfEditor.length - 1).tagName
if(lastChildName == 'IMG' || lastChildName == 'DIV'){
  let pTag = document.createElement('p')
  editor.appendChild(pTag)
  addListenerAllBtns()
}
  }

  inputUrlBox.appendChild(inputUrl)
  inputUrlBox.appendChild(getUrlBtn)


  document.body.appendChild(inputUrlBox)
    
  
}


btns.appendChild(header)
btns.appendChild(ulListBtn)
btns.appendChild(olListBtn)
btns.appendChild(imgBtn)
btns.appendChild(unsplashBtn)
btns.appendChild(youtubeBtn)

let rect = e.target.getBoundingClientRect()

btns.id = 'btns'
btns.classList.add('btns')
btns.style.top =rect.y - 5 + 'px'
btns.style.left=rect.x + 40 + 'px'
document.body.appendChild(btns)
  
 btnRemove()
 addListenerAllBtns()

}


function btnVisiblity(){
  

  let allBtnParam = []
  let allParam = editor.querySelectorAll('#editor p')
  allParam.forEach(it=>{
    if(it.innerHTML == ''){
      allBtnParam.push(it)
    }
  })
 

  allBtnParam.forEach((itbtn, i)=>{

   itbtn.addEventListener("selectstart",()=>{

      let btns = document.querySelectorAll('.btn')
   
      btns.forEach(btn=>{
       
        if(btn.getAttribute("index") == i){
            btn.style.opacity = 0
            console.log('svsvsbfdsbdfbdsfndsndsfgsnfgsgfnfgn');
        }else{
          btn.style.opacity = 1
        }
      })
      
      
    })
  })

}

var selection
var buttonGroup = document.getElementById('button-group');
var btns = document.getElementById('btns')

editor.addEventListener('mouseup',(e)=>{
  
  if(window.innerWidth > 800){
    hiddenButtonGroup()
  }

  hiddenFloatingBtn()
  selection = window.getSelection();
 
  btns = document.getElementById('btns')
  buttonGroup = document.getElementById('button-group');
  if (btns) {
    document.body.removeChild(btns)
  }


    if(selection.toString() != ''){
      var range = selection.getRangeAt(0);
     
      var rect = range.getBoundingClientRect();

      if(buttonGroup || btns){
        document.body.removeChild(buttonGroup)
        createtextEditBox(rect)
      }else{
        createtextEditBox(rect)
      }

    }else if(buttonGroup){
      document.body.removeChild(buttonGroup)
    }
    
})




function createtextEditBox(rect){
  const textEditBox = document.createElement('div')
  textEditBox.id = 'button-group'
 
  const prevBtn = document.createElement('button')
  const nextBtn = document.createElement('button')
  const boldBtn = document.createElement('button')
  const italicBtn = document.createElement('button')
  const strikethrough = document.createElement('button')
  const underlineBtn = document.createElement('button')
  const subscriptBtn = document.createElement('button')
  const superscriptBtn = document.createElement('button')
  const linkBtn = document.createElement('button')

  prevBtn.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>
  `
  nextBtn.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
  `
  boldBtn.innerHTML=`
  <svg title="Bold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-type-bold" viewBox="0 0 16 16">
                     <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
                   </svg>
  `
  italicBtn.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-type-italic" viewBox="0 0 16 16">
                     <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
                   </svg>
  `
  underlineBtn.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-type-underline" viewBox="0 0 16 16">
  <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z"/>
</svg>
  `
  strikethrough.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-type-strikethrough" viewBox="0 0 16 16">
<path d="M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z"/>
</svg>
  `
  subscriptBtn.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-subscript" viewBox="0 0 16 16">
  <path d="m3.266 12.496.96-2.853H7.76l.96 2.853H10L6.62 3H5.38L2 12.496h1.266Zm2.748-8.063 1.419 4.23h-2.88l1.426-4.23h.035Zm6.132 7.203v-.075c0-.332.234-.618.619-.618.354 0 .618.256.618.58 0 .362-.271.649-.52.898l-1.788 1.832V15h3.59v-.958h-1.923v-.045l.973-1.04c.415-.438.867-.845.867-1.547 0-.8-.701-1.41-1.787-1.41-1.23 0-1.795.8-1.795 1.576v.06h1.146Z"/>
</svg>
  `
  superscriptBtn.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-superscript" viewBox="0 0 16 16">
  <path d="m4.266 12.496.96-2.853H8.76l.96 2.853H11L7.62 3H6.38L3 12.496h1.266Zm2.748-8.063 1.419 4.23h-2.88l1.426-4.23h.035Zm5.132-1.797v-.075c0-.332.234-.618.619-.618.354 0 .618.256.618.58 0 .362-.271.649-.52.898l-1.788 1.832V6h3.59v-.958h-1.923v-.045l.973-1.04c.415-.438.867-.845.867-1.547 0-.8-.701-1.41-1.787-1.41C11.565 1 11 1.8 11 2.576v.06h1.146Z"/>
</svg>
  `
  linkBtn.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                     <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                     <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                   </svg>
  `
  prevBtn.addEventListener('click',prev)
  nextBtn.addEventListener('click',next)
boldBtn.addEventListener('click',bold)
italicBtn.addEventListener('click',italic)
underlineBtn.addEventListener('click',underline)
strikethrough.addEventListener('click',strikeThrough)
subscriptBtn.addEventListener('click',subscript)
superscriptBtn.addEventListener('click',superscript)
linkBtn.addEventListener('click',link)


textEditBox.appendChild(prevBtn)
textEditBox.appendChild(nextBtn)
  textEditBox.appendChild(boldBtn)
  textEditBox.appendChild(strikethrough)
  textEditBox.appendChild(underlineBtn)
  textEditBox.appendChild(italicBtn)

  textEditBox.appendChild(subscriptBtn)
  textEditBox.appendChild(superscriptBtn)
  textEditBox.appendChild(linkBtn)

 textEditBox.style.top = rect.y + window.scrollY - 54 + 'px';
 //textEditBox.style.left = rect.x - 50  + 'px';

 if(rect.x <= (window.innerWidth / 2)){
  textEditBox.style.left = rect.x   + 'px';
 }else{
  textEditBox.style.left = rect.x - 300  + 'px';
 }

 textEditBox.style.display = 'flex';

 document.body.appendChild(textEditBox)
}

function prev(){
  document.execCommand('undo',false,null)
  window.getSelection().empty()
}function next(){
  document.execCommand('redo',false,null)
  window.getSelection().empty()
}function bold(){
  document.execCommand('bold',false,null)
  window.getSelection().empty()
}function italic(){
  document.execCommand('italic',false,null)
  window.getSelection().empty()
}function underline(){
  document.execCommand('underline',false,null)
  window.getSelection().empty()
}function strikeThrough(){
  document.execCommand('strikeThrough',false,null)
  window.getSelection().empty()
}function subscript(){
  document.execCommand('subscript',false,null)
  window.getSelection().empty()
}function superscript(){
  document.execCommand('superscript',false,null)
  window.getSelection().empty()
}

function link(){
 
// ONEMLI BOLUM BURASI
  const selectedText = window.getSelection().toString()
  var range = window.getSelection().getRangeAt(0);

  buttonGroup = document.getElementById('button-group');

  const box = document.createElement('div')
  const input = document.createElement('input')
  const ok = document.createElement('button')
  const cancel = document.createElement('button')

  box.setAttribute('style',
  `
display:flex;
align-items:center;  
justify-content:space-between;
background-color:rgb(236, 236, 236);
z-index:999;
heidgt:100%;
width:calc(100% - 10px);
position:absolute;
top:5px;
left:5px;
right:5px;
bottom:5px;
  `
  )
  input.type='text'
  input.setAttribute('id','promptInput')
  input.setAttribute('placeholder',"Link url'ini girin")
  input.setAttribute('style',
`
background-color:rgb(236, 236, 236);
padding:3px;
border:none;
outline-width:0;
`
  )
  input.onfocus = (event)=>{
    event.preventDefault()
    event.stopPropagation()
  
  }
  input.onclick = (event)=>{
    event.preventDefault()
  
  }

  ok.textContent='Ok'
  ok.addEventListener('click',(event)=>{
    
     if(selectedText != ''){
      var link = document.getElementById('promptInput').value
      var anchorTag = document.createElement('a');
      anchorTag.href = link;
      anchorTag.innerText = selectedText;
  
      // Seçilen metni link ile değiştirme
      
      range.deleteContents();
      range.insertNode(anchorTag);
      
  window.getSelection().empty()
     }
     buttonGroup.removeChild(box)
    
  })

  cancel.textContent='Cancel'
  cancel.onclick = ()=>{ 
    buttonGroup.removeChild(box)
    
  }

  box.appendChild(input)
  box.appendChild(ok)
  //box.appendChild(cancel)

 
  buttonGroup.appendChild(box)

  input.focus();
 
}

function ul_list(){
  document.execCommand('insertUnorderedList',false,null)
}
function ol_list(){
  document.execCommand('insertOrderedList',false,null)
}



const header = document.querySelector('header')
  let prevValue = 0 ,nextValue

window.onscroll=()=>{
  hiddenFloatingBtn()
}

  
//   nextValue = window.scrollY
//     if(nextValue > 50){
//         if(nextValue > prevValue){
//             // visible header
//           header.style.top='-100px'
//         }else{
//             // hidden header
//             header.style.top='-1px'
//         }
//     }

//     prevValue = nextValue
// }

function hiddenFloatingBtn(){
  btns = document.getElementById('btns')
 var inputUrlBox = document.getElementById('inputUrlBox')
if (btns) {
  btns.style.display='none'
}
if (inputUrlBox) {
  document.body.removeChild(inputUrlBox)
}
}

function hiddenButtonGroup(){
  buttonGroup = document.getElementById('button-group');
if (buttonGroup) {
  buttonGroup.style.display='none'
}
}


const keywordList = document.getElementById('keywords')

keywordList.addEventListener('keypress',(e)=>{
  console.log(e.code);
if(e.code == "Enter"){
  keywordList.value += ', '
}
if(e.code == "Comma"){
  e.preventDefault()
  keywordList.value += ', '
}

})

