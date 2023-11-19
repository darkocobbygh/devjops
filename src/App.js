import './App.css';
import data from './data/data.json';
import { FaBars } from "react-icons/fa";

function App() {

  return (
    <div className="App">
     <nav className='navbar'>
       <div>
       <div className='nav'>
        devjobs
        <FaBars />
       </div>
       </div>
       </nav>
    <div className='jobs' >
      {data.map((datas)=>{
        return(
          <div key={datas.id} className='items'>
           <div dangerouslySetInnerHTML={{ __html: datas.logo }}></div>
            <div>
              <div className='time'>
              <p>{datas.postedAt} </p>
              <p>{datas.contract} </p>
              </div>
              <h3>{datas.position} </h3>
              <p className='company'>{datas.company} </p>
              <p className='location'>{datas.location} </p>
            </div>
          </div>
        )
      })}
    </div>
    </div>
  );
}

export default App;
