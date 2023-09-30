"use client"

export default function Crudtest ({todo, toggleTodo}) {
  return (
    <div className="text-white">
        <div key={todo.id}>{todo.title} <button onClick={() => toggleTodo(todo)}>DELETE</button></div>
    </div>
  )
}
