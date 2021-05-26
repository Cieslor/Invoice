import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isUserLoaded } from 'state';
import { useAuthStateChanged } from 'firebaseAPI';
import { SignUpView } from 'views';

const App = () => {
  const isLoaded = useRecoilValue(isUserLoaded);

  useAuthStateChanged();

  return (
    <Box w="100%" h="100vh" backgroundColor={useColorModeValue('invoice.cultured', 'invoice.xiketic')}>
      <Router>
        {isLoaded && (
          <Switch>
            <Route path="/signup" component={SignUpView} />
          </Switch>
        )}
      </Router>
    </Box>
  );
};

export default App;
