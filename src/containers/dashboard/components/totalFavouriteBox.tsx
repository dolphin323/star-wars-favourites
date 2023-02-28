import { Gender } from "@services/domains/character/types";
import React, { memo } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

const favouritesByGenderTitle = {
  [Gender.FEMALE]: "Female Fans",
  [Gender.MALE]: "Male Fans",
  [Gender.OTHER]: "Others",
};

const TotalFavouriteBox = memo(
  ({ value, gender }: { value: number; gender: Gender }) => {
    return (
      <View style={styles.totalFavouriteContainer}>
        <Text style={styles.totalFavouriteNumber}>{value}</Text>
        <Text style={styles.totalFavouriteLabel}>
          {favouritesByGenderTitle[gender]}
        </Text>
      </View>
    );
  }
);

export { TotalFavouriteBox };
