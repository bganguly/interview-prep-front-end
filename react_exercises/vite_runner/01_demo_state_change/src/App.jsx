import { Demo_01_basics_01, Demo_01_basics_02 } from './components/Demo_01_basics.jsx'
import { Demo_02_with_no_markup, Demo_02_with_markup_01, Demo_02_with_markup_02, Demo_02_settimeout_return, Demo_02_with_usestate_01, Demo_02_with_usestate_02  } from './components/Demo_02_with_settimeout.jsx'

import './App.css';

const App = () => {
  return (
    // usage - uncomment one component at a time
    //  may have to refresh browser as setTieouts aren't getting cleared
    <>
      {/* <Demo_01_basics_01 /> */}
      {/* <Demo_01_basics_02 /> */}
      {/* <Demo_02_with_no_markup /> */}
      {/* <Demo_02_with_markup_01 /> */}
      {/* <Demo_02_with_markup_02 /> */}
      {/* <Demo_02_settimeout_return /> */}
      {/* <Demo_02_with_usestate_01 /> */}
      {/* <Demo_02_with_usestate_02 /> */}
      <Demo_02_with_usestate_02 />
    </>
  )
}

export default App;
