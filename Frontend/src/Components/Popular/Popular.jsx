import './Popular.css';
import { useState, useEffect } from 'react';
import Items from '../Items/Items';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((response) => response.json())
      .then((data) => setPopular(data))
      .catch((error) => console.error('Error fetching popular items:', error));
  }, []);

  return (
    <div className='popular'>
      <h1>HOTTEST ELECTRONICS!</h1>
      <hr />
      <div className='popular-item'>
        {popular.map((item) => (
          <Items
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
