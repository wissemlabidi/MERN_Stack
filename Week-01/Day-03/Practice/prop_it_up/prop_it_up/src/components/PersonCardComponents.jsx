import React, {Component} from "react";

class PersonCard extends Component {
    render() {
        return(
            <div>                
                {this.props.Person.map((Person, index)=> <div key={index}>
                    <h4>{Person.firstName},{Person.lastName}</h4>
                    <p>Age : {Person.age}</p>
                    <p>Hair Color : {Person.hairColor}</p>
                </div> )}
            </div>
        )
    }
} 
export default PersonCard