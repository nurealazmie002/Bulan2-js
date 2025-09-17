import { addTask,getAllTask,deleteTask } from "./taskService.js";

addTask("Belajar Node.js");
addTask("Mengerjakan Tugas");
addTask("Olahraga");
console.log(getAllTask());
deleteTask(2);
console.log(getAllTask());