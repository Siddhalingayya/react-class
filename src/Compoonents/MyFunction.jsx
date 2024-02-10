import React from "react";
import ReactDOM from 'react-dom/client';

function Name(props) {
  return <li> I am  {props.brand} </li>;

}

function Film(props) {
  return <li>  My fav film is  {props.brand2}</li>;
}

function MyFunction() {
  const names = ['A', 'B', 'C'];
  const films = ['rhtdm', 'robot', 'dark']
  return (
    <>
      <h1>Who lives in my room?</h1>
      <ul>
        {names.map((name) => <Name brand={name} />)}
        {films.map((film) => <Film brand2={film} />)}
      </ul>
    </>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));

export default MyFunction


