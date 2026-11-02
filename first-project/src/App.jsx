const reactDescriptions = ["Fundamental", "Crucial", "Core"];

const titles = ["fundamentals", "crucial", "core"];

function getRandomInt() {
  return Math.floor(Math.random() * titles.lenght);
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {titles[getRandomInt()]}react concepts you ill need for almost any app
        you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
