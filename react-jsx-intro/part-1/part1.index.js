import React from 'react';
import ReactDOM from 'react-dom/client';



const Blue = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Blue</h1>
            <p>{props.name}</p>
        </div>
    
    )
}








const root = ReactDOM.render.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById('root') 
);
