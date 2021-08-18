import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import MySkills from "./mySkills/MySkills";
import MyWorks from "./myWorks/MyWorks";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MySkills />
            <MyWorks />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
