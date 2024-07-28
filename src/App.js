export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far away 🧳</h1>;
}

function Form() {
  return <div className="add-form"></div>;
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items n your list, and you already packed 😍 X</em>
    </footer>
  );
}
