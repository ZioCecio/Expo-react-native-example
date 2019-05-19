import React from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";

import Article from "./../Components/Article";

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null
    };
  }

  fetchEvents() {
    fetch("https://RundownAbsoluteCamel--xdlol11tunzi.repl.co/articles")
      .then(response => response.json())
      .then(response => {
        this.setState({
          articles: response
        });
      });
  }

  viewDetails(article) {
    console.log(article);
    this.props.navigation.navigate("Detail", { article: article });
  }

  render() {
    if (this.state.articles == null) {
      this.fetchEvents();

      return (
        <View style={styles.container}>
          <StatusBar size="large" color="blue" />
        </View>
      );
    }

    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => (
          <Article article={item} viewDetails={this.viewDetails} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
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

export default withNavigation(MainPage);
