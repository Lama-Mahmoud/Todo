
$(document).ready(function(){
$("#add-todo").click(function(){
	time= new Date($.now());
	priority=$("#priority").val();
	title=$("#title").val();
	description=$("#task").val();
	done=0;
	priority=parseInt(priority);
	
	
	console.log(time);
	console.log(priority);
	console.log(title);
	console.log(description);
	
	
	if(priority>5 || priority<1 )
	{
		alert("priority between 1 and 5");
		return
	}
	value=[title,description,priority,done,time];
	localStorage.setItem("1", JSON.stringify(value));
	var test = JSON.parse(localStorage.getItem("1"));
	
	var itemKey = localStorage.key(1);
	console.log(itemKey);
	var values = localStorage.getItem(itemKey);
	console.log(values);
	
});
});