import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<ButtonComponent text="Clicca qui" colors={{ backgroundColor: "orange" }} />
				<ButtonComponent text="No, Clicca qui!" colors={{ backgroundColor: "limegreen", color: "white" }} />
				<ImageComponent
					src="https://images.unsplash.com/photo-1542768846-4064a7293322?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="albero di natale"
					width="200px"
					maxHeight="100px"
				/>
				<ImageComponent
					src="https://images.unsplash.com/photo-1702882239346-15d2b5afd99e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="ciambelline"
					width="300px"
					maxHeight="100px"
				/>
			</header>
		</div>
	);
}

export default App;
