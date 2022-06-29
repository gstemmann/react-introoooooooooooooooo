import React from 'react';
import ReactDOM from 'react-dom/client';




const App = () => (
        <div>
            <Blue name="This is blue" />
        </div>
    )



const root = ReactDOM.render.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById('root') 
);
