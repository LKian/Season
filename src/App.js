import React from "react";
import SeasonDisplay from "./Components/SeasonDisplay";
import Spinner from "./Components/Spinner";

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
  renderContent() {
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

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="borderRed">{this.renderContent()}</div>;
  }
}

export default App;
