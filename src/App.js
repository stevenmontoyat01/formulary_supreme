import { Route,Routes} from 'react-router-dom'
import { Home } from '../src/components/Pages/Home/Home'
import { Inicio } from '../src/components/Pages/Inicio/Inicio'
import { Register } from '../src/components/Pages/Register/Register'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path='/registro' element={<Register/>}></Route>
    </Routes>
  );
}

export default App;
