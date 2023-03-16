import Profile from './profile/Profile';
import logo from "./profile/ab.png";

function App() {
  const handleName = (name) => alert(`Profile user name is ${name}`);

  return (
    <div className="App">
      <Profile
        fullName="SAGHRO AYOUB"
        bio="Full-stack  developper"
        profession="Web Developer"
        handleName={handleName}
      >
        <img src={logo} alt="profile" 
        
          style={{ borderRadius: '50%' }}
        />
      </Profile>
    </div>
  );
}

export default App;