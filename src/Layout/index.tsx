import React from 'react';
import { Container, Wrapper } from './styles';

import Main from '../components/Main';

const Layout: React.FC = () => {
  return (
  
      <Container>
        <Wrapper>
          {/* <MenuBar/> */}
          <Main />
          {/* <SideBar /> */}
        </Wrapper>
      </Container>

    );
}

export default Layout;