import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { Header } from "./components/Header";
import { PageContent } from "./modules/PageContent";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
