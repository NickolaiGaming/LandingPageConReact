import React from 'react';
import NavBar from './Components/navbar';
import Jumbotron from './Components/jumbotron';



const App = () => {
    return (
        <>
        <NavBar titulo="Start Bootstrap"/>
        <div className='container-fluid mt-4'>
        <Jumbotron 
        exampleButon = "Titulo Boton"
        h1="A Warm Welcome!" 
        description="Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."
        />
        </div>
        </>
        
    )
}

export default App;