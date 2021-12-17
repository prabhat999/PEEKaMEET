import "./App.css";
import { Route, Routes } from "react-router";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import CreateNote from "./components/Notes/CreateNote";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/createnote" element={<CreateNote />} />
        <Route exact path="/editnote/:id" element={<CreateNote />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
