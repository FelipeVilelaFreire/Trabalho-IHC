import React, { useState } from "react";
import "../shared/Shared.css";
import "./SignupScreen.css";

/**
 * SignupScreen - Tela de cadastro inicial
 * Primeiro passo do fluxo "Simule você aqui"
 *
 * @param {Function} setCurrentScreen - Função para navegar entre telas
 * @param {Function} onSubmit - Função chamada após submeter o formulário
 */
const SignupScreen = ({ setCurrentScreen, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (field) => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  // Validação do formulário
  const isFormValid = () => {
    return (
      formData.name.trim().length > 0 &&
      formData.email.trim().length > 0 &&
      formData.email.includes('@') &&
      formData.password.length >= 6
    );
  };

  // Validação de campos individuais
  const getFieldError = (field) => {
    if (!touched[field]) return null;

    switch (field) {
      case 'name':
        return formData.name.trim().length === 0 ? 'Nome é obrigatório' : null;
      case 'email':
        if (formData.email.trim().length === 0) return 'E-mail é obrigatório';
        if (!formData.email.includes('@')) return 'E-mail inválido';
        return null;
      case 'password':
        if (formData.password.length === 0) return 'Senha é obrigatória';
        if (formData.password.length < 6) return 'Senha deve ter no mínimo 6 caracteres';
        return null;
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Marca todos os campos como touched ao tentar submeter
    setTouched({
      name: true,
      email: true,
      password: true,
    });

    if (isFormValid()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="app-screen signup-screen">
      {/* Header */}
      <div className="app-header">
        <button className="back-btn" onClick={() => setCurrentScreen("home")}>
          ←
        </button>
        <h2>Simulado</h2>
      </div>

      <div className="signup-content">
        {/* Header */}
        <div className="signup-header">
          <h2>Comece seu simulado</h2>
          <p>Crie sua conta e descubra atividades incríveis perto de você</p>
        </div>
        {/* Form */}
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              className={getFieldError('name') ? 'input-error' : ''}
            />
            {getFieldError('name') && (
              <span className="error-message">{getFieldError('name')}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              className={getFieldError('email') ? 'input-error' : ''}
            />
            {getFieldError('email') && (
              <span className="error-message">{getFieldError('email')}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Mínimo 6 caracteres"
              value={formData.password}
              onChange={handleChange}
              onBlur={() => handleBlur('password')}
              className={getFieldError('password') ? 'input-error' : ''}
            />
            {getFieldError('password') && (
              <span className="error-message">{getFieldError('password')}</span>
            )}
          </div>

          <button
            type="submit"
            className="signup-submit-btn"
            disabled={!isFormValid()}
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;
