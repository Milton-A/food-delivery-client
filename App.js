import "./global.css"
import { ExpoRoot } from 'expo-router';
import { Provider } from 'react-redux'
import { store } from "./redux/store";


export default function App() {
  return (
    <Provider store={store}>
      <ExpoRoot context={require.context('./screens', true, /\.js?$/)} />
    </Provider>
  );
}