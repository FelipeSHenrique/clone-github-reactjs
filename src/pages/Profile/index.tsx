import React from 'react';

import { 
  Container, 
  Main, 
  LeftSide, 
  RightSide, 
  Repos, 
  CalendarHeading,
  RepoIcon,
  Tab
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">20</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>
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

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'Felipe Henrique'}
                  reponame={'youtube-content'}
                  description={'Contains all of my youtube lessons code'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;