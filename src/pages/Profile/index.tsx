import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'FelipeSHenrique'}
            name={'Felipe Henrique'}
            avatarUrl={'https://avatars1.githubusercontent.com/u/49046577?s=460&u=096edee886528585fb2eeb4475c1a6792f5777e4&v=4'}
            followers={887}
            following={7}
            company={'DevCompany'}
            location={'Curitiba, Brazil'}
            email={'felipeh.soares3@gmail.com'}
            blog={'felipehenrique.dev.br'}
          />
        </LeftSide>

        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;