export interface toDOInterface{
    tasks:Array<String>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}