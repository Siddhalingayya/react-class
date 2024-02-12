// import React from "react";
import React from 'react';
import { Link } from "react-router-dom";


const navBarnames = [
  {
    name: 'My function',
    path: '/'
  },
  {
    name: 'Stylesheet',
    path: '/stylesheet'
  },
  {
    name: 'My form',
    path: '/myform'
  },
  {
    name: 'Message',
    path: '/message'
  },
  {
    name: 'Counter',
    path: '/counter'
  },
  {
    name: 'dynamiccontentcomponent',
    path: '/dynamiccontentcomponent'
  },
  {
    name: 'My Functional Component',
    path: '/MyFunctionalComponent'
  },
  {
    name: 'Greet',
    path: '/Greet'
  },
  {
    name: 'User Greeting',
    path: '/UserGreeting'
  },
  {
    name: 'Counter Component',
    path: '/CounterComponent'
  },
  {
    name: 'Event Bind',
    path: '/EventBind'
  },
  {
    name: 'Subscribe Btn',
    path: '/SubscribeBtn'
  },
  {
    name: 'Subscribe Button',
    path: '/SubscribeButton'
  },
  {
    name: 'Inline',
    path: '/Inline'
  },
  {
    name: 'Demo',
    path: '/Demo'
  },
  {
    name: 'About',
    path: '/About'
  },
  {
    name: 'Contact',
    path: '/Contact'
  },
  {
    name: 'Form',
    path: '/Form'
  },
  {
    name: 'ParentComponent',
    path: '/ParentComponent'
  },
  {
    name: 'Hello',
    path: '/Hello'
  },
  {
    name: 'classClick',
    path: '/classClick'
  },
  {
    name: 'Hello',
    path: '/Hello'
  },
  {
    name: 'Hello',
    path: '/Hello'
  },
  {
    name: 'Hello',
    path: '/Hello'
  },
  {
    name: 'My Functional Component',
    path: '/MyFunctionalComponent'
  },
  {
    name: 'LifeCycleB',
    path: '/LifeCycleB'
  },
  {
    name: 'Dropdown',
    path: '/Dropdown'
  },
  {
    name: 'LineChart',
    path: '/LineChart'
  },
  {
    name: 'LifeCycleB',
    path: '/LifeCycleB'
  },
  {
    name: 'ScrollableComponent',
    path: '/ScrollableComponent'
  },
  {
    name: 'Exam',
    path: '/Exam'
  },
  {
    name: 'Timer',
    path: '/Timer'
  },
  {
    name: 'Exam',
    path: '/Exam'
  },
  {
    name: 'FavoriteColor',
    path: '/FavoriteColor'
  },
  {
    name: 'Component1',
    path: '/Component1'
  },
  {
    name: 'FetchApi',
    path: '/FetchApi'
  },
  {
    name: 'MyComponent',
    path: '/MyComponent'
  },
  {
    name: 'Dropdown2',
    path: '/Dropdown2'
  },
  {
    name: 'Accordian',
    path: '/Accordian'
  },
  {
    name: 'CheckBox',
    path: '/CheckBox'
  },
  {
    name: 'CounterA',
    path: '/CounterA'
  },
  {
    name: 'Table',
    path: 'Table'
  },
  {
    name: 'CheckboxAndSelect',
    path: '/CheckboxAndSelect'
  },
  {
    name: 'PostList',
    path: '/PostList'
  },
];

function Navbar() {


  
  const newArray = navBarnames.sort((a, b) => {
    let a1 = a.name.toLowerCase(),
        b1 = b.name.toLowerCase();

    if (a1 < b1) {
        return -1;
    }
    if (a1 > b1) {
        return 1;
    }
    return 0;
  });

  return (
    <nav>
      {/* <button onClick={sortAlphabetically}>Sort Alphabetically</button> */}
      <ul className="nav-bar">

      {
        newArray.map((item, index) => {
          return <li className="nav" key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        })
      }
       
      </ul>
    </nav>
  );
}

export default Navbar;
