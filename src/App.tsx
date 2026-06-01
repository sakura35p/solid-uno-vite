import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div 
    min-h-screen
    border="5px solid red">
      <div
      h-5vh
      flex
      items-center
      border="1px solid blue">
        <p 
        border="1px solid green">
          study 
        </p>
        <div
        ml-auto
        flex
        gap-8
        border="1px solid"
        >
        <p
        border="1px solid green">
          somthing...
        </p>
        <p
        border="1px solid purple">
          login
        </p>
        </div>
      </div>
    </div>
  );
};

export default App;
