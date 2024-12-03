// about.js
export function aboutPage(){

    const content = document.createElement("p");
    content.innerText = "Please search the contact below";
    document.getElementById("text_content").appendChild(content);


    let myArrayFooter = ["Khaly: 0967518934", "Tom: 097451321", "Dave: 0967321721"];
    
    //create textnode
    for(let i = 0; i < myArrayFooter.length; i++){
        var listArray = document.createElement("li");
        const textToBeAdded = document.createTextNode(myArrayFooter[i]);
        listArray.appendChild(textToBeAdded);
        document.getElementById("text_content").appendChild(listArray);
    }
    

}
