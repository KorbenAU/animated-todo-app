import React, {useState} from "react";
import {Box, Center, Text, useColorModeValue, VStack} from "native-base";
import ThemeToggle from "../Components/ThemeToggle";
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import {Pressable, StyleSheet} from "react-native";

const Main = () => {
   const [checked, setChecked] = useState<boolean>(false);

   const handleCheckboxPress = () => {
      setChecked(prev => {
         return !prev;
      });
   };

   return (
       <Center _dark={{bg: "blueGray.900"}}
               _light={{bg: "blueGray.50"}}
               px={4}
               flex={1}
       >
          <VStack space={5} alignItems="center">
             <Box w={"100px"} h={"100px"}>
                <Pressable onPress={handleCheckboxPress} style={styles.checkbox}>
                   <AnimatedCheckbox
                       checked={checked}
                       highlightColor="#4444ff"
                       checkmarkColor="#ffffff"
                       boxOutlineColor="#4444ff"
                   />
                </Pressable>
             </Box>
             <Box bg={useColorModeValue("red.500", "yellow.500")}
                  p={10}
             >
                <Text>
                   Hello Korben
                </Text>
             </Box>
             <ThemeToggle/>
          </VStack>
       </Center>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
   },
   checkbox: {
      width: 64,
      height: 64
   }
});

export default Main;
