import React, { Component, Fragment } from 'react'

class Counter extends Component {
    render() {
        return (  
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className="btn btn-secondary btn-sm ">
                Increment
            </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary"; /* What i did in the above code and the code in line is
    rendering it dynamically. So depending on the count property in LINE 5, if the property is zero, it will be warning
    (yellow) and when its greater than 0, it will be primary(blue). So, i just rendered the tpe of class in the variable
    "classes" and then appended with the tenary operator saying if it is === 0 then it should render warning, and if it is
    greater than 0, then it shld render primary.
    */
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value ===0 ? 'Zero' : value;
    }
};
 
export default Counter;