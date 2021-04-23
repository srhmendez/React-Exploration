import React, {useState, useEffect} from 'react';
import './App.css';
import './Shop.css';
import {Link} from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

        const fetchItems = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/upcoming/get`);

        const items = await data.json();
        setItems(items.data);
        console.log(items.data)
    }
  return (
    <div>
        <h1 className="pageTitle">Shopping Page</h1>
        {items.map(item => (
            <Link to={`/shop/${item.itemId}`}><h3 key={item.itemId}>{item.item.name}</h3></Link>
        ))}
    </div>
  );
}

export default Shop;
