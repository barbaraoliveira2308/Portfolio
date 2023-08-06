import React, { Component } from 'react';

class FormularioContato extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      mensagem: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer o que quiser com os dados do formulário, por exemplo, enviá-los para o servidor

    // Após lidar com os dados do formulário, podemos redefinir o estado para limpar o formulário
    this.setState({
      nome: '',
      email: '',
      mensagem: ''
    });
  };

  render() {
    return (
      <div>
        <h1>Entre em contato</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={this.state.mensagem}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default FormularioContato;
