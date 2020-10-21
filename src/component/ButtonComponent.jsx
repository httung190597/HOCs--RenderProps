import React from "react";

export default function(props) {
  return (
    <div>
        <button className="buttonload" style={{width:'120px'}}
            onClick={() => props.clicked()}
        >
            <i 
                className={props.isLoading  ? "fa fa-spinner fa-spin" : ""}
                // className= "fa fa-spinner fa-spin"
            >
            </i>{props.isLoading ? 'Loading': 'Click'}
        </button> 
    </div>
  );
}
