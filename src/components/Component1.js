import React from "react";
import { Spring } from "react-spring";

export default function Component1() {
  return (
    <Spring>
      {(props) => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              deleniti pariatur sequi delectus maxime sint adipisci dolorum
              nulla corporis iusto, harum similique sunt ipsa consequatur ut
              repudiandae esse eum perspiciatis reiciendis, accusamus
              consequuntur? Vel, nobis quod, ipsa optio sunt perspiciatis
              accusantium iusto eaque quibusdam repudiandae quia. Sint nam harum
              saepe sed suscipit, ab fugiat dolor illo similique, exercitationem
              et! Non quis sit sunt. Tempora quo totam est!
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
};
