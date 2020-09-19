import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }) {
    // useState é um hook para controlar estado dentro do componente funcional
    const [username, setUserName] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await api.post('/devs', { username });
        const { _id } = response.data;
        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    type="text"
                    name=""
                    id=""
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                    placeholder="digite o seu identificador do github" />
                <button type="submit">
                    Enviar
                </button>

            </form>
        </div>
    );
}