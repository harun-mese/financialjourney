<script src="./js/editor.js" defer></script>
<main>

        <input type="file" name="image" id="selectedImage">
        <label  for="selectedImage">
           <img id="placeholderImage" width="50%" src="../assets/image.png" alt="">
            <!-- <h1>Görsel eklemek için tıkla</h1> -->
        </label>

        <div style="padding: 0 10px;width: 100%;display:flex;align-items:center;flex-direction:column;">

             <div name="text" id="title" placeholder="Title" contenteditable="true"></div>
             <div name="text" id="description" placeholder="Description" contenteditable="true"></div>
             <input name="text" id="keywords" placeholder="Keywords"></input>

            <div id="editor" contenteditable="true">
                <p></p>
                
            </div>
        </div>
        <div>
        <button id="draftBtn">Save as draft</button>
        <button id="publisBtn">Publish</button>
        </div>
         
</main>  