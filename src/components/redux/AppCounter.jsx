import { store } from "./counterstore";
import { Provider } from "react-redux";
import TheCounter from "./TheCounter";

const AppCounter = () => {
  return (
    <Provider store={store}>
        <TheCounter />
    </Provider>
  )
}

export default AppCounter