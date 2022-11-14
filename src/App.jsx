import './App.css';
// import Order from './components/Order';
// import Menu from './components/Menu';

import React, { useState } from 'react';

const App = () => {
  // coffee
  const [coffeeNum, setcoffeeNum] = useState(0);
  const coffeeValue = coffeeNum * 480;

  // tee
  const [teeNum, setTeeNum] = useState(0);
  const teeValue = teeNum * 280;


  // milk
  const [milkNum, setMilkNum] = useState(0);
  const milkValue = milkNum * 180;

  // cola
  const [colaNum, setColaNum] = useState(0);
  const colaValue = colaNum * 190;

  // beer
  const [beerNum, setBeerNum] = useState(0);
  const beerValue = beerNum * 580;

  //　合計
  const sumNum = coffeeNum + teeNum + milkNum + colaNum + beerNum;
  const sumAccount = coffeeValue + teeValue + milkValue + colaValue + beerValue;

  const onCoffeeCountUp = () => {
    setcoffeeNum(coffeeNum + 1);
  };
  const onTeeCountUp = () => {
    setTeeNum(teeNum + 1);
  };
  const onMilkCountUp = () => {
    setMilkNum(milkNum + 1);
  };
  const onColaCountUp = () => {
    setColaNum(colaNum + 1);
  };
  const onBeerCountUp = () => {
    setBeerNum(beerNum + 1);
  };

  return (
    <React.Fragment>
      <div className="app">
        <div className="menu">
          <div className="menu-contents">
            <button onClick={onCoffeeCountUp}>
              Coffee 480円
            </button>
            <span>{coffeeNum}</span>
          </div>

          <div className="menu-contents">
            <button onClick={onTeeCountUp}>
              Tee 280円
            </button>
            <span>{teeNum}</span>
          </div>

          <div className="menu-contents">
            <button onClick={onMilkCountUp}>
              Milk 180円
            </button>
            <span>{milkNum}</span>
          </div>

          <div className="menu-contents">
            <button onClick={onColaCountUp}>
              Cola 190円
            </button>
            <span>{colaNum}</span>
          </div>

          <div className="menu-contents">
            <button onClick={onBeerCountUp}>
              Beer 580円
            </button>
            <span>{beerNum}</span>
          </div>
        </div>

        <div className="order">
          <p>合計: {sumNum}個</p>
          <p>金額: {sumAccount}円</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;