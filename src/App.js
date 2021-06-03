import Todo from './components/todo'
import Modal from './components/modal'
import Backdrop from './components/backdrop'

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Learn React" />
      <Todo title="Master React" />
      <Todo title="Explore full React course" />
      <Modal />
      <Backdrop />
    </div>
  )
}

export default App
