import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Statistic = props => (
  <Container>
    <Title>{props.title}</Title>
    <Total color={props.color}>{props.total}</Total>
    <Text style={{ fontFamily: "regular", fontSize: 12, textAlign: "center" }}>
      New:
      <Change color={props.color}> {props.change}</Change>
    </Text>
  </Container>
);

export default Statistic;

const Container = styled.View`
  background: #f9f9f9;
  flex: 3;
  margin: 0 5px;
  flex-direction: column;
  justify-content: center;
  padding: 10px 5px;
  border-radius: 5px;
`;

const Title = styled.Text`
  font-family: "bold";
  font-size: 12px;
  text-align: center;
`;

const Total = styled.Text`
  font-family: "regular";
  font-size: 20px;
  text-align: center;
  color: ${props => props.color || "#000"};
`;

const Change = styled.Text`
  font-family: "regular";
  font-size: 12px;
  text-align: center;
  color: ${props => props.color || "#000"};
`;
