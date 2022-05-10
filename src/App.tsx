import Addtodo from "./Components/Addtodo";
import Todos from "./Components/Todos";
import Provider from "./store/Provider";

function App() {

  return (
    <Provider >
      <Addtodo />
      <Todos />
    </Provider>
  );
}

export default App;
