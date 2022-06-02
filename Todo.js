class task {
  constructor(title, description,priority,done,time) {
    this.title = title;
    this.description = description;
	this.priority=priority;
	this.done=done;
	this.time=time;
  }
}

function getTasks(isDone){
	
	$("#myList").empty();
	
	if (isDone==-1)
	{
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
	}
	else{
	for(i=0;i<localStorage.length;i++)
	{
		id = localStorage.key(i);
		var todo = JSON.parse(localStorage.getItem(id));
		title=todo.title;
		description=todo.description;
		priority=todo.priority;
		done=todo.done;
		
		if(done==isDone)
			content="<li id="+id+"><button class='done'>&#10004;</button><p class='title'>"+title+"</p><p class='description'>"+description+"</p><p class='priority'>"+priority+"</p><button class='close'>&#215;</button></li>";
		
		$("#myList").append(content);
		
	}
	
	}
	
	
	
	$(".close").click(function(){
		console.log("element deleted");
		id=$(this).parent().attr("id");
		localStorage.removeItem(id);
		$(this).parent().remove();
		console.log("element deleted");
	});
	
}

function getpriority(){
	
	$("#myList").empty();
	
	for(j=5;j>0;j--){
		for(i=0;i<localStorage.length;i++)
		{
			id = localStorage.key(i);
			var todo = JSON.parse(localStorage.getItem(id));
			title=todo.title;
			description=todo.description;
			priority=todo.priority;
			done=todo.done;
		
			if(priority===j)
			{
				console.log(id);
				content="<li id="+id+"><button class='done'>&#10004;</button><p class='title'>"+title+"</p><p class='description'>"+description+"</p><p class='priority'>"+priority+"</p><button class='close'>&#215;</button></li>";
				$("#myList").append(content);
			}
		
		}
		
	}
	
	
	
	$(".close").click(function(){
		console.log("element deleted");
		id=$(this).parent().attr("id");
		localStorage.removeItem(id);
		$(this).parent().remove();
		console.log("element deleted");
	});
	
}


$(document).ready(function(){
	
	getTasks(-1);
	
	
	$("#byPrio").click(getpriority);
	
	$("#notdone").click(function(){
			getTasks(0);
	});
	
	$("#add-todo").click(function(){
		
		
		
		time= new Date($.now());
		priority=$("#priority").val();
		$("#priority").val("");
		
		title=$("#title").val();
		$("#title").val("");
		
		description=$("#task").val();
		$("#task").val("");
		
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
		
		getTasks(-1);
	
	});
	
	
	
});