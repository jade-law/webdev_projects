import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = React.useState([])

  function addNote(event, newNote) {
    setItems((prevState) => {
      return [
        ...prevState,
        newNote
      ]
    })
    event.preventDefault()
  }

  function deleteNote(id) {
    setItems(prevState => {
      return prevState.filter((item, index) => {
        return index !== id
      })
    })
  }

  function formatNotes(item, index) {
    return <Note key={index}
      id={index}
      title={item.title}
      content={item.content}
      handleClick={deleteNote}
    />
  }

  return (
    <div>
      <Header />
      <CreateArea handleClick={addNote}/>
      {items.map(formatNotes)}
      <Footer />
    </div>
  );
}

export default App;
