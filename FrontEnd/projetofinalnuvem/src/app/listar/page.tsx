'use client'

import { useEffect, useState } from 'react'

type Task = {
    id: number
    titulo: string
    descricao: string
    status: string
}

export default function ListarTarefas() {
    const [tarefas, setTarefas] = useState<Task[]>([])

    useEffect(() => {
        carregarTarefas()
    }, [])

    const carregarTarefas = async () => {
        const resposta = await fetch('http://3.216.147.169:8080/task')
        const dados = await resposta.json()
        setTarefas(dados)
    }

    const deletarTarefa = async (id: number) => {
        try {
            const resposta = await fetch(`http://3.216.147.169:8080/task/${id}`, {
                method: 'DELETE'
            })

            const dados = await resposta.json()
            alert(`Tarefa "${dados.titulo}" deletada com sucesso!`)
            carregarTarefas()
        } catch (erro) {
            alert('Erro ao deletar tarefa')
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Lista de Tarefas</h1>

            {tarefas.map((tarefa) => (
                <div key={tarefa.id} style={{ borderBottom: '1px solid #ccc', marginBottom: 10 }}>
                    <strong>{tarefa.titulo}</strong><br />
                    {tarefa.descricao}<br />
                    Status: {tarefa.status}<br />
                    <button onClick={() => deletarTarefa(tarefa.id)}>Deletar</button>
                </div>
            ))}
        </div>
    )
}
