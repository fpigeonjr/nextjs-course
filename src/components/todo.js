export default function Todo(props) {
  function handleDelete() {
    alert(`${props.title} was clicked`)
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}
