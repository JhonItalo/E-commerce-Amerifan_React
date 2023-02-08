import Rotas from "./rotas/Rotas";
import GlobalStyle from "./styles/Global";
import Theme from "./styles/Themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
     return (
          <>
               <Theme>
                    <GlobalStyle />
                    <ToastContainer />
                    <QueryClientProvider client={queryClient}>
                         <Rotas />
                    </QueryClientProvider>
               </Theme>
          </>
     );
}

export default App;
