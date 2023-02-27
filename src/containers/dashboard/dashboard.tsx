import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { DefaultButton, Loader } from "@components/index";
import { actions } from "@state/actions";
import { RootState } from "@state/reducers";

import { styles } from "./styles";

const Dashboard: React.FC = () => {
  const { currentCharacters, currentPage, isNextPage, isLoading } = useSelector(
    (state: RootState) => state.character
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.character.getCharacters({ page: 1 }));
  }, []);

  const handleNextPage = () => {
    dispatch(actions.character.getCharacters({ page: currentPage + 1 }));
  };

  const handlePreviousPage = () => {
    dispatch(actions.character.getCharacters({ page: currentPage - 1 }));
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Fans</Text>
            <View>
              {isLoading && <Loader isTransparentBg style={styles.loader} />}
              {currentCharacters.map((character, index) => {
                return <Text key={index}>{character.name}</Text>;
              })}
            </View>
            <View style={styles.buttonsContainer}>
              <DefaultButton
                title="Previous"
                disabled={currentPage == 1}
                onPress={handlePreviousPage}
              />
              <DefaultButton
                title="Next"
                disabled={!isNextPage}
                onPress={handleNextPage}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export { Dashboard };
