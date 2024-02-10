// import logo from './logo.svg';
import { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Home from './Compoonents/Home';
// import { Link } from 'react-router-dom';
//import TodoApp from './Compoonents/ToDoApp';
import SubscribeBtn from "./Compoonents/SubscribeBtn";
// import Welcome from './Compoonents/Welcome';
import Hello from "./Compoonents/Hello";
import Helloo from "./Compoonents/Helloo";
import Demo from "./Compoonents/Demo";
// import MyFunction from './Compoonents/MyFunction';
import Message from "./Compoonents/Message";
import Counter from "./Compoonents/Counter";
import Greet from "./Compoonents/Greet";
//import FunctionClick from './Compoonents/FunctionClick';
import ClassClick from "./Compoonents/ClassClick";
import EventBind from "./Compoonents/EventBind";
import ParentComponent from "./Compoonents/ParentComponent";
import UserGreeting from "./Compoonents/UserGreeting";
import NameList from "./Compoonents/NameList";
import StyleSheet from "./Compoonents/StyleSheet";
import Inline from "./Compoonents/Inline";
// import Todos from './Compoonents/Todos';
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./Compoonents/Form";
//import LifeCycle from './Compoonents/LifecycleA';
import LifeCycleA from "./Compoonents/LifecycleA";
//import Navbar from './Compoonents/Navbar';
// import FunctionComponent from './Compoonents/FunctionComponent';
import SubscribeButton from "./Compoonents/SubscribeButton";
// import ToDoList from './Compoonents/TodoList';
// import TodoItem from './Compoonents/TodoItem';
import CounterComponent from "./Compoonents/CounterComponent";
import MyFunctionalComponent from "./Compoonents/MyFunctionalComponent";
import DynamicContentComponent from "./Compoonents/DynamicContentComponent";
import About from "./Compoonents/About";
import Contact from "./Compoonents/Contact";
//import Person from './Compoonents/Person';
import MyFunction from "./Compoonents/MyFunction";
import Components from "./Compoonents/Components";
import MyForm from "./Compoonents/MyForm";
import Navbar from "./Compoonents/Navbar";
import LifeCycleB from "./Compoonents/LifecycleB";
//import ChildComponent from './Compoonents/ChildComponent';
import Dropdown from "./Compoonents/Dropdown";
import LineChart from "./Compoonents/LineChart";
import ScrollableComponent from "./Compoonents/ScrollableComponent";
import Exam from "./Compoonents/Exam";
import FavoriteColor from "./Compoonents/FavoriteColor";
import Timer from "./Compoonents/Timer";
import Component1 from "./Compoonents/Component1";
import NewApp from "./Compoonents/NewApp";
import FetchApi from "./Compoonents/FetchApi";
import PostList from "./Compoonents/PostList";
import MyComponent from "./Compoonents/MyComponent";
import Dropdown2 from "./Compoonents/Dropdown2";
import CheckBox from "./Compoonents/CheckBox";
import CheckboxAndSelect from "./Compoonents/CheckboxAndSelect";
import CounterA from "./Compoonents/CounterA";
import Table from "./Compoonents/Table";
import Accordian from "./Compoonents/Accordian";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MyFunction />} />
          <Route path="stylesheet" element={<StyleSheet />} />

          <Route path="myform" element={<MyForm />} />
          <Route path="message" element={<Message />} />
          <Route path="counter" element={<Counter />} />
          <Route path="components" element={<Components />} />
          <Route
            path="dynamiccontentcomponent"
            element={<DynamicContentComponent />}
          />
          <Route
            path="MyFunctionalComponent"
            element={<MyFunctionalComponent />}
          />
          <Route path="NameList" element={<NameList />} />
          <Route path="Greet" element={<Greet />} />
          <Route path="UserGreeting" element={<UserGreeting />} />
          <Route path="CounterComponent" element={<CounterComponent />} />
          <Route path="EventBind" element={<EventBind />} />
          <Route path="SubscribeBtn" element={<SubscribeBtn />} />
          <Route path="SubscribeButton" element={<SubscribeButton />} />
          <Route path="Inline" element={<Inline />} />
          <Route path="SubscribeBtn" element={<SubscribeBtn />} />
          <Route path="Demo" element={<Demo />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Form" element={<Form />} />
          <Route path="ParentComponent" element={<ParentComponent />} />
          <Route path="Hello" element={<Hello />} />
          <Route path="classClick" element={<classClick />} />
          <Route path="Helloo" element={<Helloo />} />
          <Route
            path="MyFunctionalComponent"
            element={<MyFunctionalComponent />}
          />
          <Route path="LifeCycleB " element={<LifeCycleB />} />
          <Route path="Dropdown" element={<Dropdown />} />
          <Route path="LineChart" element={<LineChart />} />
          <Route path="ScrollableComponent" element={<ScrollableComponent />} />
          <Route path="Exam" element={<Exam />} />
          <Route path="FavoriteColor" element={<FavoriteColor />} />
          <Route path="Timer" element={<Timer />} />
          <Route path="Component1" element={<Component1 />} />
          <Route path="NewApp" element={<NewApp />} />
          <Route path="FetchApi" element={<FetchApi />} />
          <Route path="PostList" element={<PostList />} />
          <Route path="MyComponent" element={<MyComponent />} />
          <Route path="Dropdown2" element={<Dropdown2 />} />
          <Route path="CheckBox" element={<CheckBox />} />
          <Route path="CheckboxAndSelect" element={<CheckboxAndSelect />} />
          <Route path="CounterA" element={<CounterA />} />
          <Route path="Table" element={<Table />} />
          <Route path="Accordian" element={<Accordian />} />
        </Routes>
      </div>
    );
  }
}

export default App;
