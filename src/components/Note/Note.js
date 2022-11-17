import DeleteIcon from "../../assests/trash-can.svg";
import "./Note.css";

const timer = 500;
let timeout;

export default function Note({ note, deleteNote, updateText }) {
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const setText = (text, id) => {
    debounce(() => updateText(text, id));
  };

  // console.log(note, updateText);

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <textarea
        className="note_text"
        defaultValue={note.text}
        onChange={(event) => {
          setText(note.id, event.target.value);
        }}
      />
      <div className="note_footer">
        <p>{note.time}</p>
        <img
          src={DeleteIcon}
          alt="delete"
          onClick={() => deleteNote(note.id)}
        />
      </div>
    </div>
  );
}
