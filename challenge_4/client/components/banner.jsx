import React from 'react';

const Banner = ({message}) =>{
    return (
<div className="container">
  <div className="row">
      <div className="jumbotron mx-auto">
          <h1 className="display-4">React Based Connect 4</h1>
          {/*<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra*/}
              {/*attention to featured content or information.</p>*/}
          <hr className="my-4" />
          <p>{message}</p>
          <a className="btn btn-warning btn-lg" href="ss" role="button">Play Again</a>
      </div>
  </div>
</div>
    )
}

export default Banner;