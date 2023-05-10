import React, { Component } from 'react'
import { Spring } from 'react-spring';
export default class Component2 extends Component {
  render() {
    return (
        <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        >
          {(props) => (
            <div style={props}>
              <div style={c2Style}>
                <h1>Component 2</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facilis, voluptates ex iste nostrum incidunt cupiditate modi culpa. Praesentium exercitationem impedit, saepe nisi eius nesciunt odio illum non eligendi doloribus aliquid sequi.
                </p>
              </div>
            </div>
          )}
        </Spring>
    );
  }
  
}
const c2Style = {
    background: "green",
    color: "yellow",
    padding: "1.5rem",
};
