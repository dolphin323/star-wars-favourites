import React, { Fragment, useEffect, useState } from "react";
import { Image, ScrollView, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

import DEFAULT_LOGO from "@assets/image/logo-star-wars.jpg";
import { Loader } from "@components/index";
import { RootState } from "@state/reducers";
import { Glassmorphism } from "@components/glassmorphism/glassmorphism";

import { styles } from "./styles";
import { CharacterInfo } from "./types";
import { getCharacterInfoToDisplay } from "./helpers";

const Character: React.FC = () => {
  const { currentCharacter, isLoading } = useSelector(
    (state: RootState) => state.character
  );

  const [localIsLoading, setIsLoading] = useState(true);
  const [characterInfo, setCharacterInfo] = useState<CharacterInfo[]>([]);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const characterInfoToDisplay = await getCharacterInfoToDisplay(
          currentCharacter
        );
        setCharacterInfo(characterInfoToDisplay);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [currentCharacter]);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ height: 70 }}></View>
        <View style={styles.contentWrapper}>
          <View style={styles.glassmorphismContainer}>
            <Glassmorphism />
          </View>
          <Fragment>
            <Image source={DEFAULT_LOGO} style={styles.avatar} />
            <Text style={styles.name}>{currentCharacter?.name}</Text>
          </Fragment>

          <View style={styles.characterInfoWrapper}>
            {characterInfo.map((info) => {
              return (
                <View key={info.label} style={styles.characterInfoRow}>
                  <Text style={styles.labelCharacterInfo}>{info.label}</Text>
                  <Text style={styles.valueCharacterInfo}>{info.value}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View>
          {isLoading && <Loader isTransparentBg style={styles.loader} />}
        </View>
      </ScrollView>
      {(isLoading || localIsLoading) && (
        <Loader isTransparentBg style={styles.loader} />
      )}
    </SafeAreaView>
  );
};

export { Character };
