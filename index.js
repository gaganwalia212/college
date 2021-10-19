var curr=2
setInterval(function(){
	container=document.querySelector(".c"+curr)
	console.log(container.classList)
	var next=(curr+1)%3
	console.log(curr+" "+next)
	container.classList.toggle("notVisible")
	container=document.querySelector(".c"+next)
	// container.style.background='linear-gradient(90deg, rgba(192,39,39,1) 4%, rgba(192,39,39,0.5) 50%,rgba(244,128,109,0.4) 94%), url("img'+ next +'.jpg") #FFFFD3'
	// console.log('linear-gradient(90deg, rgba(192,39,39,1) 4%, rgba(192,39,39,0.5) 50%,rgba(244,128,109,0.4) 94%), url("img'+ next +'.jpg") #FFFFD3')
	container.classList.toggle("notVisible")
	curr=next;
	
},2000)