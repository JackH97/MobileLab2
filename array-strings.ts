let Tasks: Array<String> = [];

function addTask(task:string):number
{
Tasks.push(task);
return Tasks.length;
}

function listAllTasks(){
    Tasks.forEach(function(task){
        console.log(task);
    })
}

function deleteTask(task:String):number{
  let index:number = Tasks.indexOf(task,0);
  if(index > -1){
      Tasks.splice(index,1);
      console.log("Item " +task+ "has been deleted");
  }else {
      console.log("Item not found: "+task);

  }
  return Tasks.length;
}

addTask("item1");
addTask("item2");
addTask("item3");
listAllTasks();
deleteTask("item2");
listAllTasks();
