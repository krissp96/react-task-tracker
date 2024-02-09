import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Go to the party",
      day: "Feb 6th at 10pm",
      reminder: true,
    },
  ]);

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggke reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        console.log({ ...task, day: "gosho" });
        console.log(id);
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  };
  // const name = 'Brad'
  // const x = false
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}

      {/* <h2>Hello {name}</h2>
      <h3>Hello {x ? 'yes' : 'no'}</h3> */}
    </div>
  );
}

export default App;

//import class

// class Class extends React.Component{
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }
// export default App
