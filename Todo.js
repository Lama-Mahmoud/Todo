class task {
  constructor(title, description,priority,done,time) {
    this.title = title;
    this.description = description;
	this.priority=priority;
	this.done=done;
	this.time=time;
  }
}

function addEventListener()
{
	
	// adding event listener to the x button
	$(".close").click(function(){
		console.log("element deleted");
		id=$(this).parent().attr("id");
		localStorage.removeItem(id);
		$(this).parent().remove();
		console.log("element deleted");
	});
	
	$(".done").click(function(){
		id=$(this).parent().attr("id");
		var todo = JSON.parse(localStorage.getItem(id));
		todo.done=1;
		localStorage.setItem(id,JSON.stringify(todo));
		$(this).parent().remove();
		console.log("task done");
	});
}

function getTasks(isDone){
	
	$("#myList").empty();
	
	
	// arrange from newest to oldest
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
		
		
	// arrange from newest to oldest based on done 1 or not done 0
	for(i=0;i<localStorage.length;i++)
	{
		id = localStorage.key(i);
		var todo = JSON.parse(localStorage.getItem(id));
		title=todo.title;
		description=todo.description;
		priority=todo.priority;
		done=todo.done;
		
		if(done===isDone){
			content="<li id="+id+"><button class='done'>&#10004;</button><p class='title'>"+title+"</p><p class='description'>"+description+"</p><p class='priority'>"+priority+"</p><button class='close'>&#215;</button></li>";
		
		$("#myList").append(content);}
		
	}
	
	}
	
	
	
	// adding event listener to the x 
	if(isDone==1)
	{
	$(".close").click(function(){
		console.log("element deleted");
		id=$(this).parent().attr("id");
		localStorage.removeItem(id);
		$(this).parent().remove();
		console.log("element deleted");
	});
	
	$(".done").click(function(){
		id=$(this).parent().attr("id");
		var todo = JSON.parse(localStorage.getItem(id));
		todo.done=0;
		localStorage.setItem(id,JSON.stringify(todo));
		$(this).parent().remove();
		console.log("task done");
	});
	}
	
	else{
		addEventListener();
	}
	
}

function getpriority(){
	
	
	
	// arrange from newest to oldest and by priority from 5 to 1
	
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
		
			if(priority===j && done===0)
			{
				console.log(id);
				content="<li id="+id+"><button class='done'>&#10004;</button><p class='title'>"+title+"</p><p class='description'>"+description+"</p><p class='priority'>"+priority+"</p><button class='close'>&#215;</button></li>";
				$("#myList").append(content);
			}
		
		}
		
	}
	
	
		addEventListener();
			$("#status").empty();
			$("#status").append("ALL By Time from newest to oldest BY PRIORITY");
	
}


$(document).ready(function(){
	
	getTasks(-1);
	
	//  NAV bar listeners
	$("#byPrio").click(getpriority);
	
	$("#notdone").click(function(){
			getTasks(0);
			$("#status").empty();
			$("#status").append("ALL By Time from newest to oldest NOT DONE");
	});
	
	$("#done").click(function(){
			getTasks(1);
			$("#status").empty();
			$("#status").append("ALL By Time from newest to oldest DONE");
	});
	
	
	$("#Normal").click(function(){
			getTasks(-1);
			$("#status").empty();
			$("#status").append("ALL By Time from newest to oldest");
	});
	
	
	
	//adding a new task
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
		
		// checking datat
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
		
		// loading data to the objectt constructor
		todo=new task(title,description,priority,done,time);
		
		i=localStorage.length;
		console.log(i);
		
		//prevent replacing
		if(i!=0)
		{
			id = localStorage.key(0);
			console.log(id);
			sub=id.substr(1,id.length);
			console.log(id);
			i=parseInt(sub)+1;
			console.log(i);
		}
		key="t"+i;
		localStorage.setItem(key,JSON.stringify(todo));
		
		// updating list
		content="<li id="+key+"><button class='done'>&#10004;</button><p class='title'>"+title+"</p><p class='description'>"+description+"</p><p class='priority'>"+priority+"</p><button class='close'>&#215;</button></li>";
		$("#myList").prepend(content);
		
		// add event listener
		$(".close").click(function(){
			console.log("element deleted");
			id=$(this).parent().attr("id");
			localStorage.removeItem(id);
			$(this).parent().remove();
			console.log("element deleted");
		});
		
		$(".done").click(function(){
			id=$(this).parent().attr("id");
			var todo = JSON.parse(localStorage.getItem(id));
			todo.done=0;
			localStorage.setItem(id,JSON.stringify(todo));
			$(this).parent().remove();
			console.log("task done");
		});
	
	});
	
	
	$(".done").click(function(){
		id=$(this).parent().attr("id");
		var todo = JSON.parse(localStorage.getItem(id));
		todo.done=1;
		localStorage.setItem(id,JSON.stringify(todo));
		$(this).parent().remove();
		console.log("task done");
	});
	
});