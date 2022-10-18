import { useState }  from 'react'
import './App.css';
import io from 'socket.io-client'
import Chat from './Chat'

//connecting frontend to the backend
const socket = io.connect("http://localhost:3001")

function App() {

  //state to represent your username and room
  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setShowChat] = useState(false)

  //function to join a room whenever the button is clicked
  //establishes a connection btn the user who entered the app and the socket.io room they want to enter 
  const joinRoom = () => {
    if(username !== "" && room !== "") {
      // emit an event in socket.io from the frontend to backend
      socket.emit("join_room", room)
      setShowChat(true)
    }
  }

  return (
    <div className="App">
      {!showChat ?
      (  <div className='joinChatContainer'>
          <h3>Join A Party</h3>
          <input type="text" autoFocus
                placeholder="@example John..." 
                onChange={(e) => setUsername(e.target.value)}
          />
          {/* A placeholder for a room.  A room is where messages are broadcasted.A user enters the name of the room and whoever wants to join the room enters the same name.If two users type the same room name, they automatically become in the same room */}
          <input type="text" 
                placeholder="Room ID..."
                onChange={(e)=>setRoom(e.target.value)}
          /> 
          <button onClick={joinRoom}>Join a Room</button>
        </div>) 
      :(
        <Chat socket={socket} username={username} room={room} />)
      }
    </div>
  );
}

export default App;
