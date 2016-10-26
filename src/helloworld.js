ReactDOM.render(
	<h1>hello world</h1>,
	document.getElementById("root")
)

//root#2
var names=['jack','rose'];
ReactDOM.render(
	<div>
		<div>遍历数组数据：</div>
		{names.map(function(name){
			return <div>hello,{name}!</div>
		})}
	</div>,
	document.getElementById("root2")
)

//root#3
var arr=[
	<div>hello jack</div>,
	<div>hello rose</div>
]
ReactDOM.render(
	<div>
		<div>直接引用数组数据：</div>
		{arr}
	</div>,
	document.getElementById("root3")
)