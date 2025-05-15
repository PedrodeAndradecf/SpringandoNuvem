'use client'

import { useState } from 'react'

export default function NovaTarefa() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    const criarTarefa = async () => {
        try {
            const resposta = await fetch('http://localhost:8080/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ titulo, descricao })
            })

            const dados = await resposta.json()
            alert('Tarefa criada com sucesso!')
            console.log(dados)
        } catch (erro) {
            alert('Erro ao criar tarefa')
            console.error(erro)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Criar nova tarefa</h1>
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
            <button onClick={criarTarefa}>Enviar</button>
        </div>
    )
}
