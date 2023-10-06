
import './App.css'
import { Model} from './shared/types/typesChange';
import ChangeModel from './modules/ChangeModule/ChangeModule'

function App() {

  const sampleModel: Model = {
    params: [
      { name: 'param1', type: 'text' },
      { name: 'param2', type: 'text' },
    // рандомные даный и дт тп 
    ],
  };
  return (
    <>
   <ChangeModel model={sampleModel}/>

    
    </>
  )
}

export default App
