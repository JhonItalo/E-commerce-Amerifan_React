import Rotas from "./rotas/Rotas";
import GlobalStyle from "./styles/Global";
import Theme from "./styles/Themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthUserProvider } from "./contexts/AuthUser";
import CarrinhoContext from "./contexts/CartContext";
import RedirectLogin from "./contexts/RedirectLogin";

const queryClient = new QueryClient();

function App() {
     return (
          <>
               <Theme>
                    <GlobalStyle />
                    <ToastContainer />
                    <QueryClientProvider client={queryClient}>
                         <AuthUserProvider>
                              <CarrinhoContext>
                                   <RedirectLogin>
                                        <Rotas />
                                   </RedirectLogin>
                              </CarrinhoContext>
                         </AuthUserProvider>
                    </QueryClientProvider>
               </Theme>
          </>
     );
}

export default App;
