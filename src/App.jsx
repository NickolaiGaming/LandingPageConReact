import React from 'react';
import NavBar from './Components/navbar';
import Jumbotron from './Components/jumbotron';
import SeccionCards from './Components/SeccionCards';
import SeccionFooter from './Components/SeccionFoster';


const App = () => {
    return (
        <div>
            <NavBar titulo="Start Bootstrap" />
            <div className='container-fluid mt-4'>
                <Jumbotron
                    exampleButon="Titulo Boton"
                    h1="A Warm Welcome!"
                    description="Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."
                />
                <div className='row'>
                    <div className='col-lg-3 col-xs-12'>
                        < SeccionCards imagen="https://picsum.photos/id/19/500/325" cardTitle="Card title" textoBotón="Find Out More" descripción="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis" texto="Find Out More" />
                    </div>
                    <div className='col-lg-3 col-xs-12'>
                        < SeccionCards imagen="https://picsum.photos/id/19/500/325" cardTitle="Card title" textoBotón="Find Out More" descripción="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis" texto="Find Out More" />
                    </div>
                    <div className='col-lg-3 col-xs-12'>
                        < SeccionCards imagen="https://picsum.photos/id/19/500/325" cardTitle="Card title" textoBotón="Find Out More" descripción="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis" texto="Find Out More" />
                    </div>
                    <div className='col-lg-3 col-xs-12'>
                        < SeccionCards imagen="https://picsum.photos/id/19/500/325" cardTitle="Card title" textoBotón="Find Out More" descripción="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis" texto="Find Out More" />
                    </div>
                </div>
                < SeccionFooter texto="Copyright& Your Website 2023" />
                <div />
            </div>
        </div>

    )
}

export default App;