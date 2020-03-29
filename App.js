import React from "react";
import AppNavigator from "./navigator/AppNavigator";
import * as Font from "expo-font";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  componentDidMount() {
    Font.loadAsync({
      regular: require("./assets/fonts/Sk-Modernist-Regular.otf"),
      bold: require("./assets/fonts/Sk-Modernist-Bold.otf"),
      mono: require("./assets/fonts/Sk-Modernist-Mono.otf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return <AppNavigator />;
  }
}
