import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outline>Editar Perfil</EditButton> */}

        <h1>Rafael Silva</h1>
        <h2>@rafael_sh</h2>

        <p>
          Developer at <a href="/">@rafaelFullStack</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Palmas, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 08 de novembro de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>100 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>  
  );
}

export default ProfilePage;