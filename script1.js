console.log("111");
document.querySelector('#search').addEventListener('input', function(event) {
    let images=document.getElementsByClassName("imgs");
    console.log(images[0].alt)
    for(let i = 0; i < images.length; i++){
        if(images[i].alt.toLowerCase().includes(event.target.value.toLowerCase())){
            images[i].style.display = "block";
        }
        else{
            images[i].style.display = "none";
        }
    }
    console.log(event.target.value);
  });