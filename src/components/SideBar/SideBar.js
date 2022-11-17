import { useState } from "react";
import AddIcon from "../../assests/add-icon.png";
import "./SideBar.css";

export default function SideBar({ addNote }) {
  const colors = [
    "#ffc0cb",
    "#fe9b72",
    "#fec971",
    "#e4ee91",
    "#00d4fe",
    "#00ffff",
    "#D3D3D3",
  ];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <img
        src={AddIcon}
        alt="add-icon"
        onClick={() => {
          setListOpen(!listOpen);
        }}
      />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={Math.round(index)}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}
