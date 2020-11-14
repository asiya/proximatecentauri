import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
  <div className="jumbotron">  
  <img src="../src/assets/img/homepage-main.jpg" className="homeimage"></img>  
    <h1 className="text-center">Client&#39;s good is what we can serve the best...</h1>
    <Link to="about" className="btn btn-primary btn-lg text-center">
      Learn more
    </Link>
  </div>
 
  <section id="install-instructions">
<div className="grid-container">
<div className="row">
<div className="columns small-12 medium-12">
<div className="flex-row steps-row">
      <div className="step-container-flex one">
        <div className="step-text text-center">
          <p>Step <span className="step-number">1</span></p>
          </div>
          <a href="/paralegal-services">
            <div className="step-box">
            <div className="content-container">
            <p>Paralegal services.</p>
            <div className="image-container">
            <img src="https://cdn.gonitro.com/express/pages/download/step-1-image-total.png" alt="Nitro Pro Step 1"/>
            </div>
            </div>
          </div>
        </a>
      </div>
<div className="step-container-flex two">
<div className="step-text text-center">
<p>Step <span className="step-number">2</span></p>
</div>
<div className="step-box">
<div className="content-container">
<p>Module.</p>
<div className="image-container">
<img src="https://cdn.gonitro.com/express/pages/download/step-2-image-total.png" alt="Nitro Pro Step 2"/>
</div>
</div>
</div>
</div>
<div className="step-container-flex three">
<div className="step-text text-center">
<p>Step <span className="step-number">3</span></p>
</div>
<div className="step-box">
<div className="content-container">
<p>Corporate Setup.</p>
<div className="image-container">
<img src="https://cdn.gonitro.com/express/pages/download/step-3-image-total.png" alt="Nitro Pro Step 3"/>
</div>
</div>
</div>
</div>
<div className="step-container-flex four">
<div className="step-text text-center">
<p>Step <span className="step-number">4</span></p>
</div>
<div className="step-box">
<div className="content-container">
<p>Medico Legal Services.</p>
<div className="image-container">
<img src="https://cdn.gonitro.com/express/pages/download/step-3-image-total.png" alt="Nitro Pro Step 3"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
 
  </div>
);

export default HomePage;
