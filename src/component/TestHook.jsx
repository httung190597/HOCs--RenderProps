import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import BtnComponent from './ButtonComponent'

function TestHook(props) {
    const [isLoading,setIsLoading]= useState(false);
    useEffect(() =>{
        // if(isLoading > 1){
            axios.get('https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json')
            .then(res =>{
                // console.log(res)
                setIsLoading(false);
            }).catch(err => {
                // console.log(err)
                // setTimeout(function(){ 
                //     alert("Hello");
                //     setIsLoading(false);
                // }, 3000);
            })
        // }

    },[isLoading])
    function clicked() {
        // setIsLoading(isLoading + 1);
        console.log('aasd');
        setIsLoading(true)
    }

    return (
        <div className="App">
            {/* <button className="buttonload" onClick={() => clicked()}>
                <i className={isLoading  ? "fa fa-spinner fa-spin" : ""}></i>Loading
            </button> */}
            <BtnComponent isLoading={isLoading} clicked = {clicked}></BtnComponent>
        </div>
    );
      
}

export default TestHook;