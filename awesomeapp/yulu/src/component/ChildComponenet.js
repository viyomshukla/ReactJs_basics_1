
/*
** click button in child componenet ->parent component se call hoga
**
*/

import React, { Component } from "react";
class child extends Component{
    render(){
        return(
            <div>
                <button onClick={()=>this.props.callMethod("rahul from parent")}>CHILD</button>
            </div>
        )
    }
}
export default child;