import {useRef} from 'react';
import './App.css';


function App() {
  const inputRef = useRef(null);

  let counterInstance = {
    
    increament: function () {
        let userInput = inputRef.current.value || 0;
        userInput++;
        document.getElementById('userInput').value = userInput;
    },
    decreament: function () {
      let userInput = inputRef.current.value || 0;
      userInput--;
      document.getElementById('userInput').value = userInput;
    }
  };


  return (
    <div className="app">
        <header className="header">
            <p>Header</p>
        </header>
        <main className="main">
            <aside className="side-bar">
                <p>Nav</p>
            </aside>
            <div className="wrapper">
            <div className="container">
                    <img src="https://images.unsplash.com/photo-1556565681-67b9cd907d20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="A laptop" />
                    <p>Ad deserunt quis veniam culpa occaecat velit exercitation. Ad deserunt quis veniam culpa occaecat
                        velit exercitation. Labore occaecat exercitation aliquip voluptate exercitation non nulla magna.
                        Sunt adipisicing voluptate ullamco enim mollit nostrud velit enim Lorem fugiat ullamco id. In
                        occaecat consectetur sit do veniam aliqua nulla velit do exercitation cupidatat proident. Ea tempor
                        enim sint adipisicing. Labore occaecat exercitation aliquip voluptate exercitation non nulla magna.
                        Sunt adipisicing voluptate ullamco enim mollit nostrud velit enim Lorem fugiat ullamco id. In
                        occaecat consectetur sit do veniam aliqua nulla velit do exercitation cupidatat proident. Eatempor
                        enim sint adipisicing. Quis eu minim qui sit laboris laborum dolor consequat exercitation veniam
                        Lorem sint veniam.</p>
            </div>
            <div className="button-container">
                <input type="number" id="userInput" ref={inputRef}/>        
                <button className="increment-btn" onClick={counterInstance.increament}>Increase</button>
                <button className="decrement-btn" onClick={counterInstance.decreament}>Decrease</button>
            </div>
            </div>
        </main>
        
        <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
