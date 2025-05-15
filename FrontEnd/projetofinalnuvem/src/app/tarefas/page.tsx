'use client'

import { useRouter } from 'next/navigation'
import './styles.css'

export default function MenuTarefas() {
    const router = useRouter()

    return (
        <div className="container">
            <div className="card">
                <h1>Gerenciador de Tarefas</h1>

                <button onClick={() => router.push('/criar')}>Criar Tarefa</button>
                <button onClick={() => router.push('/listar')}>Listar / Deletar</button>
                <button onClick={() => router.push('/atualizar')}>Atualizar Tarefa</button>
            </div>
        </div>
    )
}
