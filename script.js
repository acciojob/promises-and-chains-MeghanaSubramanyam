//your JS code here. If required.
document.getElementById('btn').addEventListener('click',function(event){
	event.preventDefault();
	let age=document.getElementById('age').value;
	let name=document.getElementById('name').value;

	new Promise((res,rej)=>{
		setTimeout(()=>{
			if(age>=18){
				res(`Welcome, ${name}. You can vote.`)
			}
			else{
				rej(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000)
	})
	.then(mes=>alert(mes))
	.catch(mes=>alert(mes));
})