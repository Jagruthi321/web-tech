import React from "react";
import './App.css';
import ClassComponentWithProps, { ClassComponent } from "./classComponent";
import GreetWithProps, { Greet } from "./greet";

function App() {
    const message = "Hello everyone";
    const user = { name: 'Jagruthi', age: 19 };
    
    return (
        <div className="App">
            <Greet/>
            <GreetWithProps name="Jagruthi" />
            <ClassComponent/>
            <ClassComponentWithProps message={message} user={user} />
        </div>
    );
}

export default App;

