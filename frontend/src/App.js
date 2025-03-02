import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/items/")
            .then(response => setItems(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Items List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name} - {item.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
