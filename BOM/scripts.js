const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    if(input.value.length === 0){
        alert("Please add a chapter from the Book of Mormon");
}
let myItem = input.value;

const listItem = document.createElement("li");
const listText = document.createElement("span");
const listBtn = document.createElement("button");

listItem.appendChild(listText);
listText.testContent = myItem;
listItem.appendChild(listBtn);
listBtn.textContent = "❌";

list.appendChild(listItem);

input.value = "";

listBtn.addEventListener("click", function() {
    list.removeChild(listItem);
});

input.focus();
}
)
