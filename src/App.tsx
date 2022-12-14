import Rotas from "./rotas/Rotas";
import GlobalStyle from "./styles/Global";
import Theme from "./styles/Themes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
     return (
          <>
               <Theme>
                    <GlobalStyle />
                    <QueryClientProvider client={queryClient}>
                         <Rotas />
                    </QueryClientProvider>
               </Theme>
          </>
     );
}

export default App;
