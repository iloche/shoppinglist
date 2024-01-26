let myButton = document.querySelector("button"),
    myInput = document.querySelector("input"),
    myArticles = document.querySelector(".articles"),
    myArray = []
    mySelect = document.querySelector("select"),
    myOption = document.querySelector("option")

myButton.addEventListener('click', function(){

    if(myInput.value == ""){
        myArticles.innerHTML = ``
    }else{
        myArray.push(myInput.value)
        document.querySelector("ul").innerHTML += 
        `
        <li>${myOption.value} ${myArray[myArray.length-1]}
        <span class="remove">❌</span>
        </li>
        `
        if(document.querySelector("ul") != ""){
            document.querySelector("ul").style.border = "2px solid white"
            document.querySelector("ul").style.borderRadius = "5px"
        }
        let removeBtns = document.querySelectorAll(".remove")
        removeBtns.forEach(function(removeBtn){
            removeBtn.addEventListener('click', function(){
                removeBtn.parentElement.remove()
            })
        })
    }
    myInput.value = "";
})

mySelect.addEventListener('click', function(){
    
})

