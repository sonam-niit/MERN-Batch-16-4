class Todo{

    constructor(){
        this.todos=[]//empty array
    }

    addTask(task){
        this.todos.push(task);
        console.log("Task Added successfully")
    }
    removeTask(task){

        const index=this.todos.findIndex((value)=>value==task);
        if(index>-1){
            this.todos.splice(index,1);
            console.log("Task deleted successfully")
        }
    }

    display(){
        let html=''
            for(let data of this.todos){
                html+=`<li>${data} <button onclick='remove("${data}")'>X</button></li>`
            }
        return html;
    }
}