import Routers from "./routes";
import styles from "./App.module.scss";
import { AuthProvider } from "./Contexts/AuthContext";
function App() {
  return (
    <main className={styles.contentWrapper}>
      <AuthProvider>
      <Routers/>
      </AuthProvider>
    </main>
    
  );
}

export default App;
