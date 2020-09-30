import React, {Component} from "react";
import Biodata from "./components/Biodata";

class App extends Component{
  render(){
    return (
    <div>
    <Biodata nama="Kang Purwo" semester="1" hobi={<Hobi />} />
    <Biodata nama="Budi" semester="3" />
    </div>
    );
  }
}

const Hobi = ()=>{
return(
<ul>
  <li>Ngoding</li>
  <li>Berenang</li>
  <li>Jogging</li>
</ul>
);
};



export default App;
