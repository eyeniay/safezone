import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Intro sayfasi"
    };
  }
  render() {
    return (
      <View>
        <Text>{this.state.title}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({}, dispatch), dispatch };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
