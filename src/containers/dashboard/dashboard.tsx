import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Heart from "@assets/icon/heart.svg";
import { DefaultButton, Loader } from "@components/index";
import { actions } from "@state/actions";
import { RootState } from "@state/reducers";
import { navigate } from "@utils/navigation";
import { Route } from "@routes/route-names";

import { styles } from "./styles";
import { getCharacterId } from "@utils/character";

const Dashboard: React.FC = () => {
  const {
    characters,
    currentPage,
    isNextPage,
    favouritesCharacterIds,
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

  const handleCharacterPressed = (id: string) => {
    dispatch(actions.character.getCharacterById({ id }));
    navigate(Route.Character);
  };

  const handleAddToFavouritePressed = (id: string) => {
    dispatch(actions.character.addIdToFavourite({ id }));
  };

  const handleRemoveFromFavouritePressed = (id: string) => {
    dispatch(actions.character.removeIdFromFavourite({ id }));
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Fans</Text>
            <View>
              {isLoading && <Loader isTransparentBg style={styles.loader} />}
              {characters.map((character) => {
                const id = getCharacterId(character.url);
                const isFavourite = favouritesCharacterIds.some(
                  (favouriteId) => id === favouriteId
                );
                return (
                  <View key={id} style={styles.characterRow}>
                    <TouchableOpacity
                      onPress={() => handleCharacterPressed(id)}
                    >
                      <Text>{character.name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.iconWrapper}
                      onPress={() =>
                        isFavourite
                          ? handleRemoveFromFavouritePressed(id)
                          : handleAddToFavouritePressed(id)
                      }
                    >
                      <Heart
                        width="100%"
                        height="100%"
                        fill={isFavourite ? "red" : "none"}
                      />
                    </TouchableOpacity>
                  </View>
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
