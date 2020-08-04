import React from "react";

function CreateArea(props) {
  
  const [newNote, setNewNote] = React.useState({
    title: '',
    content: ''
  })

  function handleChange(event) {
    const value = event.target.value
    const source = event.target.name

    setNewNote(prevNote => {
      return {
        ...prevNote,
        [source]: value
      }
    })
  }

  function resetForm() {
    setNewNote({
      title: '',
      content: ''
    })
  }
  
  return (
    <div>
      <form onSubmit={(event) => {
        props.handleClick(event, newNote)
        resetForm()
      }}>
        <input name="title" placeholder="Title" value={newNote.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={newNote.content} onChange={handleChange}/>
        <button >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
