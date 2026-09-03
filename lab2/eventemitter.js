import { EventEmitter } from "node:events";

const login = (name) => {
  console.log(`${name} logged in`);
};

login("Amritansh Pandey");

const task = new EventEmitter();

task.on("greeting", login);

task.once("exit", () => {
  console.log("system shutting down");
});

task.emit("greeting", "Amritansh Pandey");
task.emit("greeting", "Viksit");

task.emit("exit");
