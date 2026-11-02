const titles = ["fundamentals", "crucial", "core"];

function getRandomInt() {
  return Math.floor(Math.random() * titles.length);
}
function Header() {
  return (
    <header>
      <img src={react - core - concepts.png} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {titles[getRandomInt()]}react concepts you ill need for almost any app
        you are going to build!
      </p>
    </header>
  );
}

export default Header;
