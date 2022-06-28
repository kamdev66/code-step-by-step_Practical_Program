import './App.css';
import ClassComponent from './topics/component/ClassComponent';
import ComponentInsideComponent from './topics/component/ComponentInsideComponent';
import FunctionalComponent from './topics/component/FunctionalComponent';
import ClickEvent from './topics/Event/ClickEvent';
import GetInputBoxData from './topics/Event/GetInputBoxData';
import HideShow from './topics/Event/HideShow';
import Toggle from './topics/Event/Toggle';
import PropsWithClassComponent from './topics/Props/PropsWithClassComponent';
import PropsWithFunctionalComponent from './topics/Props/PropsWithFunctionalComponent';
import StateInClassComponent from './topics/State/StateInClassComponent';
import StateInFunctionalComponent from './topics/State/StateInFunctionalComponent';

function App() {
  return (
    <div className="App">
     {/* <FunctionalComponent/> */}
     {/*<ClassComponent/> */}
     {/*<ComponentInsideComponent/>  */}
     {/*<ClickEvent/> */}
     {/* <StateInFunctionalComponent/> */}
     {/*<StateInClassComponent/> */}
    {/* <PropsWithFunctionalComponent name="Kamdev"/> */}
    {/* <PropsWithClassComponent name={"Kamdev"} college="LPU" city="Patna"/> */}
    {/* <GetInputBoxData/> */}
    {/* <HideShow/> */}
    {/* <Toggle/> */}
    </div>
  );
}

export default App;
