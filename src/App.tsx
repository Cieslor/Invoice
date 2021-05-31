import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isUserLoaded } from 'state';
import { useAuthStateChanged } from 'firebaseAPI';
import { SignUpView, DashboardView, SignInView, ProfileView } from 'views';
import { ProtectedRoute, MainWrapper } from 'components';

const App = () => {
  const isLoaded = useRecoilValue(isUserLoaded);

  useAuthStateChanged();

  return (
    <Box w="100%" h="100vh" backgroundColor={useColorModeValue('invoice.cultured', 'invoice.xiketic')}>
      <Router>
        {isLoaded && (
          <Switch>
            <Route path="/signup" component={SignUpView} />
            <Route path="/signin" component={SignInView} />
            <ProtectedRoute
              exact
              path="/"
              component={() => (
                <MainWrapper>
                  <DashboardView />
                </MainWrapper>
              )}
            />
            <ProtectedRoute
              path="/profile"
              component={() => (
                <MainWrapper>
                  <ProfileView />
                </MainWrapper>
              )}
            />
          </Switch>
        )}
      </Router>
    </Box>
  );
};

export default App;
