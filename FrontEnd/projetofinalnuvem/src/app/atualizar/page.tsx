'use client'

import { useEffect, useState } from 'react'

type Task = {
    id: number
    titulo: string
    descricao: string
    status: string
}

export default function AtualizarTarefa() {
    const [tarefas, setTarefas] = useState<Task[]>([])
    const [editando, setEditando] = useState<number | null>(null)
    const [form, setForm] = useState({ titulo: '', descricao: '', status: '' })

    useEffect(() => {
        carregarTarefas()
    }, [])

    const carregarTarefas = async () => {
        const res = await fetch('http://3.216.147.169:8080/task')
        const data = await res.json()
        setTarefas(data)
    }

    const iniciarEdicao = (tarefa: Task) => {
        setEditando(tarefa.id)
        setForm({ titulo: tarefa.titulo, descricao: tarefa.descricao, status: tarefa.status })
    }

    const salvar = async () => {
        if (editando === null) return

        await fetch(`http://3.216.147.169:8080/task/${editando}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })

        setEditando(null)
        setForm({ titulo: '', descricao: '', status: '' })
        carregarTarefas()
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Atualizar Tarefas</h1>

            {tarefas.map((tarefa) => (
                <div key={tarefa.id} style={{ marginBottom: 10 }}>
                    <strong>{tarefa.titulo}</strong><br />
                    {tarefa.descricao}<br />
                    Status: {tarefa.status}<br />
                    <button onClick={() => iniciarEdicao(tarefa)}>Editar</button>
                </div>
            ))}

            {editando && (
                <div style={{ marginTop: 20 }}>
                    <h2>Editando Tarefa</h2>
                    <input
                        value={form.titulo}
                        onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                        placeholder="Título"
                        style={{ display: 'block', marginBottom: 10 }}
                    />
                    <textarea
                        value={form.descricao}
                        onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                        placeholder="Descrição"
                        style={{ display: 'block', marginBottom: 10 }}
                    />
                    <input
                        value={form.status}
                        onChange={(e) => setForm({ ...form, status: e.target.value })}
                        placeholder="Status"
                        style={{ display: 'block', marginBottom: 10 }}
                    />
                    <button onClick={salvar}>Salvar Alterações</button>
                </div>
            )}
        </div>
    )
}
