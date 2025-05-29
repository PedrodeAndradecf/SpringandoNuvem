'use client'

import { useState } from 'react'

export default function CriarTarefa() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [status, setStatus] = useState('')

    const criarTarefa = async () => {
        try {
            const resposta = await fetch('http://3.216.147.169:8080/task', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ titulo, descricao, status })
            })

            if (!resposta.ok) throw new Error('Erro ao criar tarefa')

            alert('Tarefa criada com sucesso!')
            setTitulo('')
            setDescricao('')
            setStatus('')
        } catch (erro) {
            alert('Erro ao criar tarefa')
            console.error(erro)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Criar Nova Tarefa</h1>

            <input
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                style={{ display: 'block', marginBottom: 10 }}
            />

            <textarea
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                style={{ display: 'block', marginBottom: 10 }}
            />

            <input
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={{ display: 'block', marginBottom: 10 }}
            />

            <button onClick={criarTarefa}>Criar</button>
        </div>
    )
}
