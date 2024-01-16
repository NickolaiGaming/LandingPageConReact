import React from 'react';

const seccionFooter = (props) => {
    return (
        <div className="container-flex text-center pt-3">
            <div className="row expand-lg align-items-center p-3 bg-dark">
                <div className="col-lg">
                    <p className="text-white p-3">{props.texto}</p>
                </div>
            </div>
        </div>

    )
}

export default seccionFooter;