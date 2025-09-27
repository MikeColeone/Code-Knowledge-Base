使用 seTimteout 实现 setInterval


```js
function mySetInterval(func, delay){
	let timer = null;
	function loop(){
		timer = setTimeout(() => {
			func();
			loop();
		}, delay);
	}
	loop();
	return {
		clear: () => clearTimeout(timer)
	}
}
```
