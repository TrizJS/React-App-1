import React, { useState } from "react";

function Sidebar({ initialMenuItems }) {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [newItem, setNewItem] = useState("");
  const [filter, setFilter] = useState("");

  const addMenuItem = () => {
    if (newItem.trim() !== "") {
      setMenuItems([...menuItems, newItem]);
      setNewItem(""); 
    }
  };

  const filteredItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Menu</h2>
      <input
        type="text"
        placeholder="Filter menu..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add menu item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addMenuItem}>Add</button>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
