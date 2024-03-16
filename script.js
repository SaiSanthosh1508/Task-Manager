let add_task = document.querySelector(".add");
let input_area = document.querySelector("#data");
let order_list = document.querySelector("#list");
let deadline_input = document.querySelector("#timer");

add_task.addEventListener('click', () => {
    if (input_area.value.trim() === "") {
        alert("Enter the Task Name before clicking the button");
    } else {
        let parent = order_list;
        let child = document.createElement("li");
        let a = deadline_input.value.substring(0,10);
        let time = deadline_input.value.substring(11);
        parent.appendChild(child);
        child.innerHTML = "<h2>" + input_area.value + "</h2> <strong>dueDate:</strong>" + a + ", Time:" + time;


        let changeDeadlineButton = document.createElement("button");
        changeDeadlineButton.textContent = "Change Deadline";
        changeDeadlineButton.addEventListener('click', () => {
            let newDeadlineInput = document.createElement("input");
            newDeadlineInput.type = "datetime-local";
            newDeadlineInput.addEventListener('change', () => {
                child.textContent = input_area.value +" Deadline: " + newDeadlineInput.value;
            });
            child.appendChild(newDeadlineInput);
        });
        child.appendChild(changeDeadlineButton);

        let removeTaskButton = document.createElement("button"); // Create Remove Task button
        removeTaskButton.textContent = "Remove Task"; // Set button text
        removeTaskButton.addEventListener('click', () => { // Add click event listener
            parent.removeChild(child); // Remove the task item from the list
        });
        child.appendChild(removeTaskButton); // Append Remove Task button to the task item
        
    }
    input_area.value = "";
    deadline_input.value = "";
});
