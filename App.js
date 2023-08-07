import 'react-native-reanimated'
import Home from "./src/Screens/Home";
import {SafeAreaProvider} from 'react-native-safe-area-context'

const App = () => {
  return(
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  )
}

export default App;