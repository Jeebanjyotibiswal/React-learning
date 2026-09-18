
import React from "react";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState({
    html: false,
    css: false,
    js: false
  });

  return (
    <div>
      <input
        type="checkbox"
        checked={selected.html}
        onChange={(e) =>
          setSelected({ ...selected, html: e.target.checked })
        }
      />
      <label>HTML</label>

      <input
        type="checkbox"
        checked={selected.css}
        onChange={(e) =>
          setSelected({ ...selected, css: e.target.checked })
        }
      />
      <label>CSS</label>

      <input
        type="checkbox"
        checked={selected.js}
        onChange={(e) =>
          setSelected({ ...selected, js: e.target.checked })
        }
      />
      <label>JS</label>
      <button onClick={() => setSelected({ html: false, css: false, js: false })}>
        Reset
      </button>
      <h3>selected:</h3>
      <ul>
        {selected.html && <li>HTML</li>}
        {selected.css && <li>CSS</li>}
        {selected.js && <li>JS</li>}
      </ul>

    </div>
  );
}

export default App;

