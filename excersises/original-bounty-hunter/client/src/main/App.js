import React from 'react';
import BountiesContainer from './bounties/Container';
import NewBountiesContainer from './new-bounties/Container';

function App() {
  return (
    <div>
      <NewBountiesContainer />
      <BountiesContainer />
    </div>
  );
}

export default App;
