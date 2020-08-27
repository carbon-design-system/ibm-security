import { Button } from '@carbon/ibm-security';

import React from 'react';
import { render } from 'react-dom';

import '@carbon/ibm-security/css/index.min.css';

const App = () => (
  <>
    <Button>Hello World!</Button>
  </>
);

render(<App />, document.getElementById('root'));
