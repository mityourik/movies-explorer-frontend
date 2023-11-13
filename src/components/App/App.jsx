import React from 'react';
import Header from '../Header/Header';
import './App.css';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';

function App() {
    return (
        <div className='page'>
            <Header />
            <Main />
            <Movies />
            <Footer />
        </div>
    );
}

export default App;
