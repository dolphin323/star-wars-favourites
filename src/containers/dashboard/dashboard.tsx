import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";

const Dashboard: React.FC = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Starter</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export { Dashboard };
