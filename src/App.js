import 'font-awesome/css/font-awesome.min.css';
import Header from "./components/Header";
import WhatIDo from "./components/WhatIDo";
import ContactMe from "./components/ContactMe";

function App() {
    return (
        <div className="App bg-dark">
            <div className='header-background bg-dark'>
            </div>
            <Header/>
            <WhatIDo/>
            <ContactMe/>
        </div>
    );
}

export default App;
