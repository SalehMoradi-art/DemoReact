import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './CS.js'
import Stuff from './Stuff.js'

class Header extends React.Component {
  render() {
    return(
      <nav className="nav">
          <img src="/React.png" width="50px"/>
          <ul className="header">
              <li className="item">Home</li>
              <li className="item">About us</li>
              <li className="item">Pricing</li>
          </ul>
      </nav>
    );
  }
}
class Footer extends React.Component {
  render() {
    return(
      <footer>
        <p>Copywrite to saleh moradi</p>
      </footer>
    )
  }
}

function App() {
  return (
    <div>
      <Header />
      <h1>Hello world!</h1>
      
      <Stuff />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices dui sapien. Lacus luctus accumsan tortor posuere ac ut consequat semper. Est ultricies integer quis auctor. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Aenean sed adipiscing diam donec adipiscing. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Id semper risus in hendrerit gravida rutrum quisque non. Placerat duis ultricies lacus sed turpis tincidunt id. Proin fermentum leo vel orci porta non pulvinar neque. At quis risus sed vulputate odio. Eu consequat ac felis donec et odio. Risus at ultrices mi tempus imperdiet nulla malesuada.
      </p>
      
      <Car />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 