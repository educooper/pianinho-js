var tecla = document.querySelectorAll('.nota');

tecla.foreach((t)=>

{
t.AddEventListener('click',()=>{
	console.log(t.id);	
	});
});
