import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function hundleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function hundleDeleteItems(id) {
    console.log(id)
    setItems(items => items.filter(item => item.id !== id))
  }

  return (
    <div>
      <Logo />
      <Form onAddItems = {hundleAddItems}/>
      <PackingList items = {items} onDeleteItems={hundleDeleteItems}/>
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far away 🧳</h1>;
}

function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {description, quantity, packed: false, id: new Date()};
    console.log(newItem);

    onAddItems(newItem)

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 your trip ?</h3>

      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {/* creating an array out of from number that 1 to 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

function PackingList({items, onDeleteItems}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItems={onDeleteItems}/>
        ))}
      </ul>
    </div>
  );
}

function Item({ item , onDeleteItems }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items n your list, and you already packed 😍 X</em>
    </footer>
  );
}
