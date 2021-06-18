console.log("there you gooooo")

 if(document.readyState !== 'complete') {
    window.addEventListener('load',afterDOMLoaded);
} else {
    afterDOMLoaded();
}

function afterDOMLoaded(){
    const x = document.querySelector(".ytd-video-primary-info-renderer");
    const title = x.querySelector('h1');
    console.log(title.textContent)
    const y = document.querySelector(".content.style-scope.ytd-video-secondary-info-renderer");
    console.log(y.textContent)
    const description = y.textContent;
    //adding the title in the description above everything else
    //lyrics of the song are to be added here
    const updated_description = "The title is:- " + title.textContent + "\n" + description;
    console.log(updated_description)
    y.textContent = updated_description;
}
