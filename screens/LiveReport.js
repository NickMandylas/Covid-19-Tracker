import React from "react";
import {
  StatusBar,
  TouchableOpacity,
  Text,
  Linking,
  Dimensions,
  ScrollView
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components";
import Statistic from "../components/Statistic";

const source_url =
  "https://github.com/covid-19-au/covid-19-au.github.io/blob/dev/reference/reference.md";
const screenWidth = Dimensions.get("window").width;
const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

class LiveReport extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle("light-content", false);
  }

  viewSource = () => {
    Linking.canOpenURL(source_url).then(supported => {
      if (supported) {
        Linking.openURL(source_url);
      } else {
        alert("Error - Unable to open url.");
      }
    });
  };

  render() {
    return (
      <RootView>
        <ScrollView bounces={false}>
          <HeaderImage source={require("../assets/header-image.png")} />
          <Heading>Covid-19 Tracker</Heading>
          <Report>
            <Country>
              <Flag source={require("../assets/australia-flag.png")} />
              <Text
                style={{
                  marginLeft: 10,
                  flex: 1,
                  fontFamily: "bold",
                  fontSize: 18
                }}
              >
                Australia
              </Text>
              <TouchableOpacity
                style={{ flexDirection: "row", justifyContent: "center" }}
              >
                <FontAwesome5
                  name={"sync-alt"}
                  style={{ fontSize: 14, color: "#5babf9", marginTop: 2 }}
                />
                <Text
                  style={{
                    color: "#5babf9",
                    marginLeft: 5,
                    fontFamily: "bold"
                  }}
                >
                  Refresh
                </Text>
              </TouchableOpacity>
            </Country>
            <Statistics>
              <Statistic
                title="Confirmed"
                total="3122"
                change="+327"
                color="#F17F70"
              />
              <Statistic title="Deaths" total="28" change="+0" />
              <Statistic
                title="Recovered"
                total="183"
                change="+56"
                color="#5CC2B7"
              />
            </Statistics>
            <Source>
              <Time>Updated: Mar 30, 2020, 10:43am</Time>
              <TouchableOpacity
                style={{ marginLeft: "auto" }}
                onPress={this.viewSource}
              >
                <SourceLink>View Source</SourceLink>
              </TouchableOpacity>
            </Source>
          </Report>
          <Map></Map>
        </ScrollView>
        <Map></Map>
      </RootView>
    );
  }
}

const Map = styled.View`
  height: 200px;
  background-color: #ffffff;
  margin-top: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const RootView = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;

const HeaderImage = styled.Image`
  height: 175px;
  width: 100%;
  resize-mode: cover;
`;

const Heading = styled.Text`
  color: #fff;
  position: absolute;
  font-family: "bold";
  top: 70px;
  left: 5%;
  font-size: 20px;
`;

const Time = styled.Text`
  color: #8b8b8b;
  font-size: 10px;
  font-family: "regular";
`;

const SourceLink = styled.Text`
  font-size: 10px;
  margin-left: auto;
  color: #5babf9;
  font-family: "regular";
`;

const Statistics = styled.View`
  flex-direction: row;
  display: flex;
  margin: 15px 10px;
`;

const Source = styled.View`
  flex-direction: row;
  margin: 0 15px;
`;

const Report = styled.View`
  flex-direction: column;
  background-color: #fff;
  height: 175px;
  margin: 0 5%;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin-top: -70px;
`;

const Country = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;

const Flag = styled.Image`
  width: 30px;
  height: 30px;
`;

export default LiveReport;
