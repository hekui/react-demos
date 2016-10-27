ReactDOM.render(
	React.createElement("h1", null, "hello world"),
	document.getElementById("root")
)

//root#2
var names=['jack','rose'];
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement("div", null, "遍历数组数据："), 
		names.map(function(name){
			return React.createElement("div", null, "hello,", name, "!")
		})
	),
	document.getElementById("root2")
)

//root#3
var arr=[
	React.createElement("div", null, "hello jack"),
	React.createElement("div", null, "hello rose")
]
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement("div", null, "直接引用数组数据："), 
		arr
	),
	document.getElementById("root3")
)