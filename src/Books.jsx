import React, { useState, useEffect } from 'react';
import { createBook, getBooks} from './api/user';

function Books() {

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Carrega os usuários existentes quando o componente é montado
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const loadBooks = await getBooks();
      setBooks(loadBooks);
    } catch (error) {
      console.error('Erro ao buscar dados de usuários:', error);
      alert('Ocorreu um erro ao buscar dados de usuários. Tente novamente mais tarde.');
    }
  };

  const handleAuhtorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Chama a função createUser para criar um novo usuário
      await createBook({ author, title, year, description });
      alert('Livro criado com sucesso!');
      // Limpa os campos do formulário de registro após o registro bem-sucedido
      setAuthor('');
      setTitle('');
      setYear('');
      setDescription('');
      // Recarrega a lista de usuários para incluir o novo usuário
      loadBooks();
    } catch (error) {
      console.error('Erro ao criar livro:', error);
      alert('Ocorreu um erro ao criar o livro. Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <div>
        <h2>Registrar</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="new-author">Nome do Autor</label>
            <input
              type="text"
              id="new-author"
              value={author}
              onChange={handleAuhtorChange}
            />
          </div>
          <div>
            <label htmlFor="new-password">Título</label>
            <input
              type="password"
              id="new-password"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <label htmlFor="new-year">Ano</label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={handleYearChange}
            />
          </div>
          <div>
            <label htmlFor="new-description">Descrição</label>
            <input
              type="text" 
              id="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <button type="submit">Criar</button>
        </form>
      </div>

      <div>
        <h2>Lista de Livros</h2>
        <table>
          <thead>
            <tr>
              <th>Autor</th>
              <th>Título</th>
              <th>Ano</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.objectID}>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{book.year}</td>
                <td>{book.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Books;