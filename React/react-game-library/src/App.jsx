import { useState } from "react";
import Game from "./components/Game";
import Form from "./components/Form";
import useGameCollection from "./hooks/useGameCollection";

export default function App() {

  const { games, addGame, removeGame } = useGameCollection();

  return (
    <div className="app">
      <h1>Biblioteca de jogos</h1>
      <Form addGame={addGame} />
      <div className="games">
        {
          games.length > 0
            ?
            (
              games.map((game) => (
                <Game
                  key={game.id}
                  title={game.title}
                  cover={game.cover}
                  onRemove={() => removeGame(game.id)} />
              ))
            )
            :
            (
              <h2>Tente adicionar alguns jogos</h2>
            )
        }
      </div>
    </div>
  )
}