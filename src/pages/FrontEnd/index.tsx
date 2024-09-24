import { Container } from '@mui/material';
import { styled } from '@mui/system';

import { Outlet } from "react-router-dom";
import Navbar from '../../components/Navbar.tsx';

const MainScreen = styled('div')(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  "& main": {
    position: 'relative',
    flex: 1,
  }
}));

export default  function App() {

  return (
    <MainScreen>
      <nav>
        <Navbar /> 
      </nav>
      <main>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </main>
    </MainScreen>
  )
};

