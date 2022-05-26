import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Card } from "./components/Input/Card";

function App() {
  interface User {
    name: string;
    age: number;
    hobby: string;
  }

  const [user, setUser] = useState<User[]>([] as User[]);

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(Number());
  const [hobby, setHobby] = useState<string>("");

  const handleClick = () => {
    console.log(name);
    console.log(age);
    console.log(hobby);
    setUser([...user, { name, age, hobby }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Nome"
          label="Modifique os valores"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <Input
          placeholder="Hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />
        <button onClick={handleClick}>Enviar</button>
        {user &&
          user.map((u) => <Card name={u.name} age={u.age} hobby={u.hobby} />)}
      </header>
    </div>
  );
}

export default App;
