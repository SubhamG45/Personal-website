import { MantineProvider, Container, createTheme } from "@mantine/core";
import AppRoutes from "./routes/Approutes";
import "@mantine/core/styles.css";

const theme = createTheme({});
function App(){
  return(
    <>
<MantineProvider theme={theme} defaultColorScheme="light">
      <Container
        fluid
        px={0}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        
      <AppRoutes/>
    </Container>
  </MantineProvider>
  
        </>
  )}
  export default App;
  