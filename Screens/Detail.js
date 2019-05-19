import React from "react";
import { StyleSheet, Text, View, Image, Linking, Button } from "react-native";
import { withNavigation } from "react-navigation";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: this.props.navigation.getParam("article")
    };
  }

  render() {
    const article = this.props.navigation.getParam("article");
    const uri =
      "http://stackoverflow.com/questions/35531679/react-native-open-links-in-browser";

    return (
      <View style={styles.container}>
        <Image
          style={styles.centralIMG}
          source={{
            uri: article.urlToImage
          }}
        />
        <Text style={styles.title}> {article.title} </Text>
        <Text style={styles.author}> Articolo di: {article.author} </Text>
        <Text> {article.description} </Text>
        <Button
          title={"Continua a leggere"}
          onPress={() => {
            Linking.openURL(article.url);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eef7",
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    color: "#2f3030"
  },
  author: {
    textAlign: "left"
  },
  centralIMG: {
    width: "90%",
    height: "40%",
    resizeMode: "center"
  }
});

export default withNavigation(Detail);
