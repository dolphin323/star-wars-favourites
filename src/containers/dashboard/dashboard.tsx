import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { DefaultButton, Loader } from "@components/index";
import { actions } from "@state/actions";
import { RootState } from "@state/reducers";
import { navigate } from "@utils/navigation";
import { Route } from "@routes/route-names";

import { styles } from "./styles";
import { getCharacterId } from "@utils/character";

const Dashboard: React.FC = () => {
  const { characters, currentPage, isNextPage, isLoading } = useSelector(
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

  const handleCharacterPressed = (id: string) => {
    dispatch(actions.character.getCharacterById({ id }));
    navigate(Route.Character);
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Fans</Text>
            <View>
              {isLoading && <Loader isTransparentBg style={styles.loader} />}
              {characters.map((character, index) => {
                const id = getCharacterId(character.url);
                return (
                  <TouchableOpacity
                    onPress={() => handleCharacterPressed(id)}
                    key={id}
                  >
                    <Text>{character.name}</Text>
                  </TouchableOpacity>
                );
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
