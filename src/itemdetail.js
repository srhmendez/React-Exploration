import React, {useState, useEffect} from 'react';
import './App.css';
import './Shop.css';


function Item({match}) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    },[])

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);

        const item = await fetchItem.json();
        setItem(item.data.item);
        console.log(item.data.item)
        
    }
  return (
    <div className="itemDiv">
        <h1 className="pageTitle">{item.name}</h1>
        <img className="itemImage" src={item.images.background} alt=""/>
    </div>
  );
}

export default Item;
