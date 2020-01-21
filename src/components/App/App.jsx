import React from 'react';
import Header from '../Header';
import Background from '../Background';
import Packages from '../../Pages/Packages';
import Footer from '../Footer';
import Container from '../Container';

const App = () => (
  <div>
    <Header />
    <Background />
    <main>
      <Container>
        <Packages />
      </Container>
    </main>
    <Footer />
  </div>
);

export default App;
