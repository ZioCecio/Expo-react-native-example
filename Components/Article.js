import React from "react";
import { StyleSheet, Image, Text, Linking } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import { Col, Row, Grid } from "react-native-easy-grid";
import { withNavigation } from "react-navigation";

import { Card, CardItem, Button, Icon, Left, Body, Right } from "native-base";

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article: this.props.article
    };
  }

  render() {
    const { article } = this.state;

    return (
      <Card style={styles.card}>
        <CardItem>
          <Grid>
            <Col style={{ flex: 3 }}>
              <Image
                source={{
                  uri: article.urlToImage
                }}
                style={styles.image}
              />
            </Col>
            <Col style={{ flex: 4 }}>
              <Left>
                <Text>{article.title}</Text>
              </Left>
            </Col>
            <Col style={{ flex: 1 }}>
              <Left>
                <Icon
                  name="chevron-right"
                  type="FontAwesome"
                  style={{ color: "#c2c6ce" }}
                  onPress={() => this.props.viewDetails(article)}
                />
              </Left>
            </Col>
          </Grid>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 0
  },
  image: {
    height: widthPercentageToDP("30%"),
    width: widthPercentageToDP("30%"),
    flex: 1
  }
});

export default withNavigation(Article);
