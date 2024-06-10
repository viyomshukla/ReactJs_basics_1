import React from "react"
class helo extends React.Component{
    render(){   //help to return JSK file
        return(
            <div>
                <h1>this is class component</h1>
                <h1>{this.props.name}</h1>
                <h1>{this.props.batch}</h1>
                {this.props.children}
            </div>
        )
    }
}
export default helo;