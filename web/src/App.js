import Routers from "./routes";
import { AuthProvider } from "./Contexts/AuthContext";
import './styles/global.css'
function App() {
  return (
    <main >
      <AuthProvider>
      <Routers/>
      </AuthProvider>
    </main>
    
  );
}

export default App;
