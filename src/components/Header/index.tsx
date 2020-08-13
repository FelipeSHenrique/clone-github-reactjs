import React from 'react';

import { Container, GithubLogo, SeatchForm } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <GithubLogo />
      <SeatchForm>
        <input placeholder="Enter Username or Repo..." />
      </SeatchForm>
    </Container>
  );
}

export default Header;