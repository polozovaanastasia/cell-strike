import { Game } from "./components/Game/Game";
import { EnemyProvider } from "./providers/enemy/ui/EnemyProvider";

function App() {
    return (
        <div className="app">
            <EnemyProvider>
                <Game />
            </EnemyProvider>
        </div>
    );
}

export default App;
