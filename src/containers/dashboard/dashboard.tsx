import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { DefaultButton, Loader } from "@components/index";
import { actions } from "@state/actions";
import { RootState } from "@state/reducers";

import { styles } from "./styles";
import { getCharacterId } from "@utils/character";
import { Gender } from "@services/domains/character/types";
import { CharacterRow } from "./components/characterRow";

const favouritesByGenderTitle = {
  [Gender.FEMALE]: "Female Fans",
  [Gender.MALE]: "Male Fans",
  [Gender.OTHER]: "Others",
};

const Dashboard: React.FC = () => {
  const {
    characters,
    currentPage,
    isNextPage,
    favouritesCharacterIds,
    totalFavouriteCharactersByGender,
    isLoading,
  } = useSelector((state: RootState) => state.character);
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

  const handleClearFavouritePressed = () => {
    dispatch(actions.character.removeAllFavourite());
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 15 }}
          contentInsetAdjustmentBehavior="automatic"
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Fans</Text>
              <DefaultButton
                title="Clear fans"
                onPress={handleClearFavouritePressed}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {Object.keys(totalFavouriteCharactersByGender).map(function (
                key
              ) {
                return (
                  <View
                    key={key}
                    style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}
                  >
                    <Text>
                      {totalFavouriteCharactersByGender[key as Gender]}
                    </Text>
                    <Text>{favouritesByGenderTitle[key as Gender]}</Text>
                  </View>
                );
              })}
            </View>
            <View>
              {isLoading && <Loader isTransparentBg style={styles.loader} />}
              {characters.map((character) => {
                const id = getCharacterId(character.url);
                const isFavourite = favouritesCharacterIds.some(
                  (favouriteId) => id === favouriteId
                );
                return (
                  <CharacterRow
                    id={id}
                    character={character}
                    isFavourite={isFavourite}
                  />
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
