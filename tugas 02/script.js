// To-Do List
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.onclick = () => li.remove();
  
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
  
  // Catatan Singkat
  function saveNote() {
    const input = document.getElementById("noteInput");
    const display = document.getElementById("noteDisplay");
    const text = input.value.trim();
    if (text === "") return;
  
    const p = document.createElement("p");
    p.textContent = text;
    display.appendChild(p);
    input.value = "";
}
  