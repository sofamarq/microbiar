import { View, Text } from "react-native";
import BackHeader from "../../components/BackHeader";
import { colors } from "../../components/theme";
import LottieView from "lottie-react-native";
import { router } from "expo-router";
import { PrimaryButton } from "../../components/ui";

export default function PasswordChanged() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>
      <BackHeader title="" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 24 }}>
        <LottieView
          source={require("../../assets/success.json")}
          autoPlay
          loop={false}
          style={{ width: 180, height: 180 }}
        />
        <Text style={{ color: "white", fontWeight: "900", fontSize: 20, marginTop: 18 }}>
          La contraseña se ha cambiado correctamente
        </Text>
        <PrimaryButton title="Volver al perfil" onPress={() => router.replace("/(protected)/profile")} />
      </View>
    </View>
  );
}
