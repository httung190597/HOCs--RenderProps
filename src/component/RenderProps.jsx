import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
export default class RenderProps extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading : false
        }
    }
    clicked = () =>{
        this.setState({
            isLoading : true
        },() =>{
            axios.get('https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json')
            .then(res =>{
            console.log(res)
            this.setState({
                isLoading:false
            })
            }).catch(err => {
            console.log(err)
            })
        })
        
        }
    render(){
        return (
            // <BtnComponent isLoading={this.state.isLoading} clicked={() => this.clicked()}></BtnComponent>
            <div>
                {this.props.children(this.state.isLoading,this.clicked)}
            </div>
        );
    }
}
