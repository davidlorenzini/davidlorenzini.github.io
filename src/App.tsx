import Card from "./StyledComponents/Card";
import Text from "./StyledComponents/Text";
import Touchable from "./StyledComponents/Touchable";
import AddIcon from "./StyledComponents/AddIcon";

import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App dark:bg-neutral-900 w-screen h-screen flex flex-col justify-items-center px-5 py-1">
      <Card className="basis-3">
        <Text>
          {count + ""}
        </Text>
      </Card>
      <Card className="basis-3/12">
        <Text>
          Hinzufügen
        </Text>
      </Card>
      <Touchable onClick={(e) => {setCount(count + 1)}}>
        <AddIcon />
        <Text>Hinzufügen</Text>
      </Touchable>
    </div>
  );
}

export default App;
