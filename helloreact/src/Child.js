import React,{ Component } from 'react';
class Child extends Component {
    state = {
        inputVal:[]
    }
    handleAnotherFun = () => {
        // console.log('handleAnotherFun')
    }
    // handleClick = () =>
    handleClick (e){
        // console.log(this);
        this.handleAnotherFun();
        // console.log(e.target.innerHTML);
    }
    handleChange = (e) => {
        // console.log(e.target);
        console.log(e.target.value);
        this.setState({
            inputVal: e.target.value
        })
    }
    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                {this.props.msg}
                <input type="text" value={this.state.inputVal} placeholder="输入内容" onChange={this.handleChange}/>
            </div>
        )
    }
}
export default Child;
