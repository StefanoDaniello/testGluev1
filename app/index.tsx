import { View, Text, ScrollView, Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Redirect, router} from "expo-router";
import { Box } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../constants/images";
import CustomButton from "@/components/CustomButton";

export default function App() {
  return (
    // SafeAreaView serve per evitare che lo schermo venga scrollato in caso di rotazione
    <SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          <Image
            source={Images.logo}
            style={{ width: 130, height: 84 }}
            resizeMode="contain"
          />
          <Image
            source={Images.cards}
            style={{ maxWidth: 380, maxHeight: 300 }}
            resizeMode="contain"
          />
          <View style={{ position: "relative", marginTop: 20 }}>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Discovery Endless Possibilities With{" "}
              <Text style={{ color: "#FFA001" }}>Aora</Text>
            </Text>
            <Image
              source={Images.path}
              style={{
                width: 136,
                height: 15,
                position: "absolute",
                bottom: -8,
                right: -30,
              }}
              resizeMode="contain"
            />
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/(auth)/sign-in")}
            containerStyles={{ marginTop: 20, width: "100%" }}
          />
        </View>
      </ScrollView>
      {/* // StatusBar serve per impostare la barra di stato in alto  batterai opra eccetera*/}
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
