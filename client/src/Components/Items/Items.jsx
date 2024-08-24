import PropTypes from 'prop-types';
import './Items.css';
import { Link } from 'react-router-dom';

const Items = ({ id, image, name, new_price, old_price }) => {  // Added id here
  return (
    <div className='item'>
      <Link to={`/product/${id}`}><img onClick={window.scrollTo(0, 0)} src={image} alt={name} /></Link>  {/* Use id directly */}
      <p>{name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
        රු. {new_price}
        </div>
        <div className='item-price-old'>
        රු.{old_price}
        </div>
      </div>
    </div>
  );
}

Items.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,  // Ensure id is validated
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_price: PropTypes.number.isRequired,
  old_price: PropTypes.number,
};

export default Items;
