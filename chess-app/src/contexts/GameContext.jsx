import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export function GameProvider({ children }) {
    const [turn, setTurn] = useState('white');

    const nextTurn = () => {
        setTurn((prevTurn) => (prevTurn === 'white' ? 'black' : 'white'));
    }

    return (
        <GameContext.Provider value={{ turn, nextTurn }}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    const context = useContext(GameContext);
    if (!context) {
        console.error('useGame must be used within a GameProvider');
        return { turn: undefined, nextTurn: () => {} };
    }
    return context;
}