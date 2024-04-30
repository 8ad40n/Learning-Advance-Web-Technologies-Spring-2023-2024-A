import axios from 'axios';
import { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/products/list');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product, quantity) => {
    const item = { ...product, quantity };
    setCart([...cart, item]);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div>
      <h2>All Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <input type="number" defaultValue="1" min="1" />
          <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
          <button onClick={() => increaseQuantity(product.id)}>Increase Quantity</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Total Price: ${item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
