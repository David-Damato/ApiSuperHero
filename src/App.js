import './App.css';
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      heros: []
    };
  }
  componentDidMount() {
      fetch("https://www.superheroapi.com/api.php/10220195265485896/370")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              heros: result
            });
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        console.log(this.state.heros)
    }
  
    render() {
      const { error, isLoaded, heros } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
          <ul>
            {heros.map(hero => (
              <li key={heros.name}>
              {heros.id} 
                {heros.name} 
                <img 
                src= {heros.image.toString()} 
                alt="avatar"/>
              </li>
          ))}
          </ul>
        );
      }
    }
  }
export default App;
