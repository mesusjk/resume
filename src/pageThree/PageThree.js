import React from "react";
import "./PageThree.css";

function PageThree() {
  return (
    <div>
      <div className="fullpage skills">
        <h1>Skills</h1>
        <div class="programming-lngugs">
          <div>
            <img className="img-kind-1" src="../Images/html.png" />
            <p>HTML 5</p>
          </div>
          <div>
            <img className="img-kind-1" src="../Images/css.png" />
            <p>CSS 3</p>
          </div>
          <div>
            <img className="img-kind-1" src="../Images/javaScript.png" />
            <p>javaScript</p>
          </div>
          <div>
            <img className="img-kind-2" src="../Images/jQuery.png" />
            <p>jQuery</p>
          </div>
          <div>
            <img className="img-kind-4" src="../Images/react.png" />
            <p>Reactjs</p>
          </div>
          <div>
            <img className="img-kind-3" src="../Images/bootstrap.png" />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageThree;