const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Toothbrush", quantity: 6, packed: true },
  { id: 4, description: "Toothpaste", quantity: 1, packed: false },

];

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
  return <div className="list">
    <ul>
      {initialItems.map((item) => <Item item={item}/>)}
    </ul>
  </div>;
}

function Item({item}) {
  return (
    <li>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items n your list, and you already packed 😍 X</em>
    </footer>
  );
}
