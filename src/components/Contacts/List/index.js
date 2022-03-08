import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  console.log(filtered);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="list">
        {filtered.map((item, key) => (
          <li key={key}>
                <span>{item.fullname}</span>
                <span>{item.phone_number}</span>
              </li>
        ))}
      </ul>

      <p id="totalcount">
          Total Contact: ({filtered.length})
      </p>
    </div>
  );
}

export default List;
