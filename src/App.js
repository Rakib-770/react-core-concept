import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';

function App() {
  const nayoks =['Rakib', 'Imran', 'Jui', 'Nira']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF reader', price: '$40.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react developer</p>
        <Users></Users>
        <Counter></Counter>

        {/* similar to next three line of code */}
          {
            products.map(product => <Product product={product}></Product>)
          }
        
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {setCount(count + 1);};
  const handleDecrease = () => {setCount(count - 1);};
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


function Product (props){
  const productStyle ={
    border: '1px solid red',
    borderRadius: '5px',
    backgroundColor: 'goldenrod',
    height: '300px',
    width: '600px',
    float: 'left'
  }

  return (
    <div style={productStyle}> 
      <h3>{props.product.name} </h3>
      <h2>{props.product.price} </h2>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
