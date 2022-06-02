class task {
  constructor(title, description,priority,done,time) {
    this.title = title;
    this.description = description;
	this.priority=priority;
	this.done=done;
	this.time=time;
  }
}
$(document).ready(function(){

	$("#add-todo").click(function(){
		time= new Date($.now());
		priority=$("#priority").val();
		title=$("#title").val();
		description=$("#task").val();
		done=0;
		priority=parseInt(priority);
		
		
		if(priority>5 || priority<1 )
		{
			alert("priority between 1 and 5");
			return
		}
		if(title==0 || title.length==0 ||description.length==0 )
		{
			alert("all feilds must be filled");
			return
		}
		
		todo=new task(title,description,priority,done,time);
		
		i=localStorage.length;
		console.log(i);
		key="t"+i;
		localStorage.setItem(key,JSON.stringify(todo));
	
	});
});