import React from 'react';
import Header from '../Header';
import Background from '../Background';
import Packages from '../../pages/Packages';
import Footer from '../Footer';

const App = () => (
  <div>
    <Header />
    <Background />
    <main>
      <Packages />
    </main>
    <Footer />
  </div>
);

export default App;
