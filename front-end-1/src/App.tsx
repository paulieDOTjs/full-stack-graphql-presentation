import styles from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { Pages } from "./routing/Routes";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Pages />
    </div>
  );
}

export default App;
