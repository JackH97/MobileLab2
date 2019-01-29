import {toDOInterface} from './lab2C-interface';

class toDoClass implements toDOInterface{
   
    tasks:Array<string> =[];

    addTask(task:string):number{
        this.tasks.push(task);
        return this.tasks.length;
    }


     listAllTasks() {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    }
     deleteTask(task:string):number{
        let index:number = this.tasks.indexOf(task, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Item " + task + "has been deleted");
        }
        else {
            console.log("Item not found: " + task);
        }
        return this.tasks.length;
    }
}

let testClass = new toDoClass();
testClass.addTask("item1");
testClass.addTask("item2");
testClass.addTask("item3");
testClass.listAllTasks();
testClass.deleteTask("item2");
testClass.listAllTasks();
