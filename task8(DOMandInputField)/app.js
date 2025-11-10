const user = document.getElementById("userInput");
const add = document.getElementById("addBtn");
const clear = document.getElementById("clearBtn");
const items = document.getElementById("displyList");

add.addEventListener("click", () => {
    const text = user.value.trim();
    if (text !== '') {
        const li = document.createElement("li");
        li.textContent = text;

        // Create delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = ' ❌';
        delBtn.style.marginLeft = "5px";
        delBtn.style.border = "none";
        delBtn.style.backgroundColor = "transparent"


        // Remove this li when delete button clicked
        delBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(delBtn);       // Add delete button to li
        items.appendChild(li);        // Append li to ul
        user.value = '';              // Clear input
    }
});

clear.addEventListener("click", () => {
    items.innerHTML = '';            // Remove all li
});
