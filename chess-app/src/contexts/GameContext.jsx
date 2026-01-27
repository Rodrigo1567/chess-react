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
    return useContext(GameContext);
}