import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet} from "react-native";
import AppContainer from "./Components/AppContainer";
import MainScreen from "./Screens/Main";

export default function App() {
   return (
       <AppContainer>
          <MainScreen/>
       </AppContainer>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
});
