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
	
	
	for(i=0;i<localStorage.length;i++)
	{
		id = localStorage.key(i);
		var todo = JSON.parse(localStorage.getItem(id));
		title=todo.title;
		description=todo.description;
		priority=todo.priority;
		done=todo.done;
		
		content="<li id="+id+"><button class='done'>&#10004;</button><p class='title'>"+title+"</p><p class='description'>"+description+"</p><p class='priority'>"+priority+"</p><button class='close'>&#215;</button></li>";
		
		$("#myList").append(content);
		
	}
	
	
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
	
	$(".close").click(function(){
		id=$(this).parent().attr("id");
		localStorage.removeItem(id);
		$(this).parent().remove();
		console.log("element deleted");
	});
	
	
});