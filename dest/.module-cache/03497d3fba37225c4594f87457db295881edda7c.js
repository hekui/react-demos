
class Component extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

    handleClick(){
        this.state.disable = !this.state.disable;
    }

    render() {
        return (
            React.createElement("p", null, React.createElement("input", {type: "text", disabled: this.state.disable}), React.createElement("input", {type: "button", onClick: this.handleClick, value: "Change State"}))
        );
    }
}
ReactDOM.render(
	React.createElement(Component, null),
	document.getElementById("root")
)