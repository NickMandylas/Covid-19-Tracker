import React from "react";
import { View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

export default class Loading extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      regular: require("../assets/fonts/Sk-Modernist-Regular.otf"),
      bold: require("../assets/fonts/Sk-Modernist-Bold.otf"),
      mono: require("../assets/fonts/Sk-Modernist-Mono.otf")
    });

    this.props.navigation.navigate("LiveReport");
  }

  render() {
    return <ActivityIndicator size="large" />;
  }
}
