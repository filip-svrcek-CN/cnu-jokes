import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

import { Header } from "./components/Header";
import { PageContent } from "./modules/PageContent";
import { GlobalStatesContextProvider } from "./utils/GlobalStatesContext";

const StyledApp = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-right: 2rem;
  padding-left: 2rem;
  text-align: center;
`;

function App() {
  return (
    <GlobalStatesContextProvider>
      <StyledApp>
        <Header />
        <PageContent />
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
      </StyledApp>
    </GlobalStatesContextProvider>
  );
}

export default App;
