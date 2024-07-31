import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function hundleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function hundleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function hundleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function hundleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={hundleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={hundleDeleteItems}
        onToggleItems={hundleToggleItems}
        onClearList={hundleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
