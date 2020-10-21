import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
export default function(BtnComponent,api){
    return class extends Component{
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
              axios.get(api)
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
              <BtnComponent isLoading={this.state.isLoading} clicked={() => this.clicked()}></BtnComponent>
            );
          }
    }
}