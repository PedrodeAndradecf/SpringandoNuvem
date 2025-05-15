export default function Tarefa() {
  return (
      <li>
        <div className="task-left">
          <input type="checkbox" />
          <span className="task-text">Tarefa de exemplo já adicionada</span>
        </div>
        <div className="actions">
          <button>Editar</button>
          <button>Deletar</button>
        </div>
      </li>
  );
}