import React, { Component } from 'react';
// const { Component } = require("react");

class ClassBasedComponent extends Component{

    //state
    state = {
        showText : false,
        changeColor: false,
        count : 0,
        changeCountStyle : false,
    }
    handlerClick = () =>{
        console.log("button clicked");
        const {showText, changeColor} = this.state;
        this.setState(
            {
                // showText: !this.state.showText,
                showText: !showText,
                changeColor: !changeColor
            }
        );
    };
    handleCount = () =>{
        this.setState(
            {
                ...this.state,
                count : this.state.count + 1

            }
        );
    }
        // componentDiMount: run first time when page is loaded
    componentDidMount(){
        console.log("this is called first time when page loaded");
        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.changeColor,
        });
        // you can call API on page load and do lots of other things too
    }
    //componentDiUpdate: call immediately after updating occurs
    componentDidUpdate(prevProps,prevState){
        console.log("componentDidupdate called after updating occurs");
        if(
             prevState.count != this.state.count &&
            this.state.count ===10){
                this.setState({
                    ...this.state,
                    changeCountStyle : !this.state.changeCountStyle
                });
            }
            }
        
    
    //componentWillUnmount: component is unmounted
    componentWillUnmount(){
        console.log("component is getting unmounted");
    }
    //other way:
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         showText:false,
    //     };
    // }
    render(){
        console.log(this.state);
        const {showText, changeColor, count,changeCountStyle} = this.state;
        console.log(changeCountStyle);
        return (
             <div>
                {
                    // this.state.showText? 
                    // (<h3> Class based component </h3>): null
                    showText ? 
                    (<h3 style={{color : changeColor? 'red': 'black'}}> Class based component </h3>): null

                }
            
            <button onClick={this.handlerClick}>Toggle Text</button>
            <button onClick={this.handleCount}>Increase Count Value</button>
            <h3 style={{color: changeCountStyle ? 'blue' : 'black', fontSize : changeCountStyle ? '30px' : '12px'}}>Count is : {count} </h3>
            </div>
        );
    }
}

export default ClassBasedComponent;