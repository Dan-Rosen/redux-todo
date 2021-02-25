import "./App.css"
import NoteForm from "./components/NoteForm"
import Notes from "./components/Notes"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Notes</h1>
            </header>
            <NoteForm />
            <Notes />
        </div>
    )
}

export default App
