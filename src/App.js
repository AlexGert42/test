import { Header } from "./components/header/Header";
import { GameField } from "./components/gemeField/GameField";
import { GameFieldProvider } from "./context/GameFieldContext";

function App() {
    return (
        <GameFieldProvider>
            <main className="main">
                <Header />
                <GameField />
            </main>
        </GameFieldProvider>
    );
}

export default App;
