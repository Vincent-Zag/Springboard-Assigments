document.addEventListener("DOMContentLoaded", function () {
    const memesContainer = document.getElementById("memes-container");
    const newMemeButton = document.getElementById("new-meme-button");

    const urlInput = document.getElementById("meme-url-input");
    const topMemeInput = document.getElementById("top-meme-input");
    const bottomMemeInput = document.getElementById("bottom-meme-input");

    let memeBoxIdCounter = 0;

    //function that validates url returns false if not
    function validateURL(url){
        try{
            new URL(url);
            return true
        }catch(error){
            console.error("URL Validation Error:", error);
            return false;
        }
    }

    function newMemeBox() {
        const box = document.createElement("div");
        box.setAttribute("data-box-id", memeBoxIdCounter.toString());
        box.className = "meme-box"; 

        //meme image element
        const memeImage = document.createElement("img");
        const imageUrl = urlInput.value.trim();
        const topText = topMemeInput.value.trim();  
        const bottomText = bottomMemeInput.value.trim();

        //check if inputs are saving
        console.log("Image URL:", imageUrl);
        console.log("Top Text:", topText);
        console.log("Bottom Text:", bottomText);

        //validator
        if(!validateURL(imageUrl)){
            alert("Invalid URL format.");
            return;
        }

        //image
        memeImage.src = imageUrl;
        memeImage.alt = 'Meme Image';
    
        //top text div
        const topTextDiv = document.createElement("div");
        topTextDiv.className = "meme-text top-text";
        topTextDiv.textContent = topMemeInput.value; 

        //bottom text div
        const bottomTextDiv = document.createElement("div");
        bottomTextDiv.className = "meme-text bottom-text";
        bottomTextDiv.textContent = bottomMemeInput.value; 

        //delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.className = "delete-button";

        //new meme box added to the container
        box.appendChild(memeImage);
        box.appendChild(topTextDiv);
        box.appendChild(bottomTextDiv);
        box.appendChild(deleteButton);
        memesContainer.appendChild(box);

        memeBoxIdCounter++;

        // removes the meme box on click of x
        deleteButton.addEventListener("click", function () {
            box.remove(); 
        });

    }

    // event listener 
    newMemeButton.addEventListener("click", function () {
        // meme box when the button is pressed is created
        newMemeBox();

        //clears text boxes
        urlInput.value = '';
        topMemeInput.value = '';
        bottomMemeInput.value = '';
    });

//possible extensions
// hover copy to clipboard button
// local storage so when refreshed the images generated are still in the browser

});