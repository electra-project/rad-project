import {useState, useEffect} from "react";
import "./NewCollection.css";
import Item from "../Items/Items";

const NewCollections = () => {
  const [new_collection,setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])

  return (
    <div className="new-collection">
      <h1> Latest Featured Products </h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
