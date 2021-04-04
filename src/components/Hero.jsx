componentDidMount() {
    fetch("https://superheroapi.com/api/10220195265485896")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            heros: result.heros
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
  }