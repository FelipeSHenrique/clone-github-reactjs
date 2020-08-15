import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SeatchForm } from './styles';

import { ThemeName } from '../../styles/themes';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) { //2:20:00 do video
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim());
  }

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SeatchForm onSubmit={handleSubmit}>
        <input 
          placeholder="Enter Username or Repo..." 
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
      </SeatchForm>
    </Container>
  );
}

export default Header;