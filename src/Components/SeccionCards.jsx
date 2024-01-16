import React from 'react';

const seccionCards = (props) => {
    return (
                    <div className="card mt-1">
                        <img
                            src={props.imagen}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{props.cardTitle}</h5>
                            <p className="card-text">{props.descripción}</p>
                        </div>
                        <div className="card-body">
                            <button type="button" class="btn btn-primary">{props.textoBotón}</button>
                        </div>
                    </div>
    )
}



export default seccionCards;