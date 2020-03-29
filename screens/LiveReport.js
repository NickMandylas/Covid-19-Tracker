import React from "react";
import { StatusBar, Image, Text } from "react-native";
import styled from "styled-components";
import Statistic from "../components/Statistic";

class LiveReport extends React.Component {
  async componentDidMount() {
    StatusBar.setBarStyle("light-content", false);
  }

  render() {
    return (
      <RootView>
        <HeaderImage source={require("../assets/header-image.png")} />
        <Heading>Covid-19 Tracker</Heading>
        <Report>
          <Country>
            <Flag source={require("../assets/australia-flag.png")} />
            <Text
              style={{
                marginLeft: 15,
                flex: 1,
                fontFamily: "bold",
                fontSize: 18
              }}
            >
              Australia
            </Text>
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
            <SourceLink>View Source</SourceLink>
          </Source>
        </Report>
      </RootView>
    );
  }
}

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
  top: 70px;
  left: 5%;
  font-size: 20px;
  font-family: "bold";
`;

const Time = styled.Text`
  color: #8b8b8b;
  font-family: "regular";
  font-size: 10px;
`;

const SourceLink = styled.Text`
  color: #8b8b8b;
  font-family: "regular";
  font-size: 10px;
  margin-left: auto;
  color: #5babf9;
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: -70px;
`;

const Country = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-left: 15px;
`;

const Flag = styled.Image`
  width: 30px;
  height: 30px;
`;

export default LiveReport;
