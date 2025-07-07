import { Game } from "./components/Game/Game";
import { SettingsForm } from "./components/Game/SettingsForm/SettingsForm";

function App() {
    return (
        <div className="app">
            <SettingsForm />
            <Game />
        </div>
    );
}

export default App;
