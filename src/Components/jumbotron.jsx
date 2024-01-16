import React from 'react'

const Jumbotron = (props) => {

    return (
      <div class="p-3 bg-secondary rounded-3 ">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">{props.h1}</h1>
        <p class="col-md-8 fs-4">{props.description}</p>
        <button class="btn btn-primary btn-lg" type="button">{props.exampleButon}</button>
      </div>
    </div>
    )
}

export default Jumbotron