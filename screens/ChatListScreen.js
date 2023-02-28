import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ChatListScreen(props) {
  return (
    <View style={styles.container}>
      <Text>ChatListScreen</Text>
      <Button
        title="Go to settings"
        onPress={() => {
          props.navigation.navigate("ChatSetting");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
