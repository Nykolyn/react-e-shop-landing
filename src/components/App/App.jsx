import React from 'react';
// import styled from 'styled-components';

import Header from '../Header';
import Background from '../Background';
import Packages from '../../Pages/Packages';
import Footer from '../Footer';
import Container from '../Container';

const App = () => (
  <div>
    <Header />
    <main>
      <Background />
      <Container>
        <Packages />
      </Container>
    </main>
    <Footer />
  </div>
);

// const MainContent = styled.main`
//   height: calc(100vh - 134px - 140px);
//   overflow: auto;
// `;

export default App;
