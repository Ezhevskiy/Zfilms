import React, {
 useState } from 'react';
import api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    api.post('/login/', { email, password }).then(res => {
      localStorage.setItem('token', res.data.access);
      alert('Вы вошли');
    });
  };

  return (
    <div>
      <h2>Вход</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
}

export default Login;