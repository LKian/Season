import React from "react";
import SeasonDisplay from "./Components/SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  // this only gets invoked once
  componentDidMount() {
    console.log(
      "COMPONENT DID MOUNT: Data loading happens here i.e. making network request to api, getting geolocation.  It is recommended to do data loading in 'componentDidMount' method.  That way, data loading is centralized."
    );

    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude.toFixed(2),
        }),
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // called every time a component is updated.  i.e. if the state changes or component receives new props from parent.
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div class="card-container">
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }

    return <div>Loading...</div>;
  }
}

export default App;
