import React, { useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

import { DefaultButton, IconButton, Loader } from "@components/index";
import { actions } from "@state/actions";
import { RootState } from "@state/reducers";
import ArrowRight from "@assets/icon/arrow-right.svg";
import ArrowLeft from "@assets/icon/arrow-left.svg";
import { getIdFromUrl } from "@utils/api";
import { Gender } from "@services/domains/character/types";

import { styles } from "./styles";
import { CharacterRow } from "./components/characterRow";
import { TotalFavouriteBox } from "./components/totalFavouriteBox";

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
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          contentInsetAdjustmentBehavior="automatic"
        >
          <View style={{ flexGrow: 1 }}>
            <View style={styles.fansWrapper}>
              <Text style={styles.title}>Fans</Text>
              <DefaultButton
                title="Clear fans"
                onPress={handleClearFavouritePressed}
              />
            </View>
            <View style={styles.totalFavouriteWrapper}>
              {Object.keys(totalFavouriteCharactersByGender).map((key) => (
                <TotalFavouriteBox
                  value={totalFavouriteCharactersByGender[key as Gender]}
                  gender={key as Gender}
                  key={key}
                />
              ))}
            </View>

            {!!characters.length && (
              <View style={styles.charactersWrapper}>
                {characters.map((character) => {
                  const id = getIdFromUrl(character.url);
                  const isFavourite = favouritesCharacterIds.some(
                    (favouriteId) => id === favouriteId
                  );
                  return (
                    <CharacterRow
                      key={id}
                      id={id}
                      character={character}
                      isFavourite={isFavourite}
                    />
                  );
                })}
              </View>
            )}
            {isLoading && <Loader isTransparentBg style={styles.loader} />}
          </View>
          <View style={styles.buttonsContainer}>
            <IconButton
              icon={<ArrowLeft width="100%" height="100%" />}
              onPress={handlePreviousPage}
              disabled={currentPage == 1 || isLoading}
            />
            <Text style={styles.pageLabel}>{`Page ${currentPage}`}</Text>
            <IconButton
              icon={<ArrowRight width="100%" height="100%" />}
              onPress={handleNextPage}
              disabled={!isNextPage || isLoading}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export { Dashboard };
