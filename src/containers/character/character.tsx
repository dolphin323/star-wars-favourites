import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useSelector } from "react-redux";

import { Loader } from "@components/index";
import { RootState } from "@state/reducers";

import { styles } from "./styles";

const Character: React.FC = () => {
  const { currentCharacter, isLoading } = useSelector(
    (state: RootState) => state.character
  );

  if (isLoading) {
    return <Loader isTransparentBg />;
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>{currentCharacter?.name}</Text>
            <View>
              {isLoading && <Loader isTransparentBg style={styles.loader} />}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export { Character };
