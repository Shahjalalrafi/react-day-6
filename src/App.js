import './App.css';
import Header from './Componenet/Header'
import Task from './Componenet/Task';
import './index.css'
import Home from './React-router/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './React-router/NotFound';
import FriendDetail from './React-router/FriendDetail';
import Countries from './RestCountries/Coutries';
import Error from './RestCountries/Error'
import CountryDetails from './RestCountries/CountryDetails';
import Hello from './siblingsComponent/Hello';
import Hi from './siblingsComponent/Hi';
import Thank from './siblingsComponent/Thank';
import { createContext, useState } from 'react';
import AddTask from './Componenet/AddTask';

export const CategoryDetail = createContext()

function App() {
  const [tasks, setTask] = useState([
    {
      name: "Doctors appointment",
      date: "15th october 2020",
      id : "1",
      reminder: 'true'
    },
    {
      name: "Meating at school",
      date: "15th october 2020",
      id : "2",
      reminder: 'false'
    },
    {
      name: "Business analysis",
      date: "15th october 2020",
      id : "3",
      reminder: 'false'
    },
    {
      name: "family Tour",
      date: "15th october 2020",
      id : "4",
      reminder: 'true'
    },    
    ])

    const deleteTask = (id) => {
      setTask(tasks.filter((task) => task.id !== id))
      
    }

    const toggleReminder = id => {
     setTask(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder}: task))
    }

    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newId = [id, ...task]
      setTask([...task, newId])
    }


  // const [count, setCount] = useState("mobile")


  return (
    <div className="App">
      <Header />
      <AddTask onAdd = {addTask} />
      {
        tasks.length < 0 ? (<Task task ={tasks} onDelete = {deleteTask} onToggle= {toggleReminder} />) : ('No task to show')
      }



      
{/* 
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          
          <Route path = "/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>


          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router> */}









{/* 
     <Router>
       <Switch>
         <Route path="/countries">
          <Countries ></Countries>
         </Route>

        <Route exact path="/">
          <Countries ></Countries>
        </Route>

        <Route path="/country/:details">
          <CountryDetails></CountryDetails>
        </Route>

        <Route path="*">
          <Error></Error>
        </Route>

       </Switch>
     </Router> */}


{/* 
     <CategoryDetail.Provider value={[count, setCount]}>
        <Hello></Hello>
        <Hi  ></Hi>
        <Thank></Thank>
      </CategoryDetail.Provider> */}



    </div>
  );
}

export default App;
