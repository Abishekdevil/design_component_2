import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import tv from './assets/tv.jpeg'
import mobile from './assets/mobile.jpeg';
import ac from './assets/ac.jpeg'
import Productcard from './components/productcard'

function App() {
  const cards =[
    {
      productImage: tv,
      productName:"Tv",
      price: '$499',
    },
    {
      productImage: mobile,
      productName: "Samsung A15 smart phone",
      price: '$249',
    },
    {
      productImage: ac,
      productName: "Whirlpool AC",
      price: '$249',
    },
    {
    productImage: tv,
    productName:"Tv",
    price: '$499',
  },
  {
    productImage: mobile,
    productName: "Samsung A15 smart phone",
    price: '$249',
  },
  {
    productImage: ac,
    productName: "Whirlpool AC",
    price: '$249',
  },
  {
    productImage: tv,
    productName:"Tv",
    price: '$499',
  },
  {
    productImage: mobile,
    productName: "Samsung A15 smart phone",
    price: '$249',
  },
  {
    productImage: ac,
    productName: "Whirlpool AC",
    price: '$249',
  },
  ]
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {cards.map((i, index) => (
        <Productcard key={index} productName={i.productName} Image={i.productImage} Price={i.price}/>
      ))}
    </div>
  );
}

export default App;
