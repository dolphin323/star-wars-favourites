import React, { memo } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";

import { Route } from "@routes/route-names";
import { Character, Gender } from "@services/domains/character/types";
import { actions } from "@state/actions";
import { navigate } from "@utils/navigation";
import Heart from "@assets/icon/heart.svg";

import { styles } from "../styles";

const CharacterRow = memo(
  ({
    id,
    character,
    isFavourite,
  }: {
    id: string;
    character: Character;
    isFavourite: boolean;
  }) => {
    const dispatch = useDispatch();

    const handleCharacterPressed = (id: string) => {
      dispatch(actions.character.getCharacterById({ id }));
      navigate(Route.Character);
    };

    const handleAddToFavouritePressed = (id: string, gender: Gender) => {
      dispatch(actions.character.addFavourite({ id, gender }));
    };

    const handleRemoveFromFavouritePressed = (id: string, gender: Gender) => {
      dispatch(actions.character.removeFavourite({ id, gender }));
    };

    return (
      <TouchableOpacity
        key={id}
        style={styles.characterRow}
        onPress={() => handleCharacterPressed(id)}
      >
        <View style={styles.characterRowWrapper}>
          <Text style={styles.characterName}>{character.name}</Text>
          <Text style={styles.characterGender}>{character.gender}</Text>
        </View>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() =>
            isFavourite
              ? handleRemoveFromFavouritePressed(id, character.gender)
              : handleAddToFavouritePressed(id, character.gender)
          }
        >
          <Heart
            width="100%"
            height="100%"
            fill={isFavourite ? "red" : "none"}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
);

export { CharacterRow };
