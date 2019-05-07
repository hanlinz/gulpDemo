window.onload = function(){
	console.log('a')
	const a = [1,2,3,4];
	let b = a.filter(item=> item > 1 && item < 4);
	console.log(b)
	console.log(b.reduce((acc,cur) => acc ^ cur));
	const c = new Map();
	c.set('a', 'content');
	console.log(c);
	var d = [];
	var e = {};
	class D {
		constructor(val){
			this.val = val
		}
	}
	var f = new Promise((resolve, reject)=>{})
	
}