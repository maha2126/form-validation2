import { useState } from "react";

const App = () => {
  const handleSubmit = event => {
    event.preventDefault()
  }
  const [user, setUser] = useState({name:"",age:""})
  return <div>
    <h1>Working with Form!!</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={user.name} placeholder="Name" onChange={ e => setUser({...user, name:e.target.value})}/>
      <input type="text" value={user.age} placeholder="Age" onChange={ e => setUser({...user, age:e.target.value})}/>
      <button >Send</button>
    </form>
  </div>
}

export default App;
