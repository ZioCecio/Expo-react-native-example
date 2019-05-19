import React from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";

export default class Deatil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: this.props.article
    };
  }

  render() {
    const { article } = this.state;

    return <Text>{article.title}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
