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

      <View style={{ flex: 1, alignItems: "center", paddingHorizontal: 24 }}>
        {/* Ícono dinámico: ajustá marginTop para controlar la altura */}
        <LottieView
          source={require("../../assets/success.json")}
          autoPlay
          loop={false}
          style={{ width: 180, height: 180, marginTop: 200 }}
        />

        {/* Texto: centrado + altura ajustable con marginTop */}
        <Text
          style={{
            color: "white",
            fontWeight: "900",
            fontSize: 18,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          La contraseña se ha cambiado correctamente
        </Text>

        {/* Botón envuelto en un View para poder espaciarlo sin pasar style al botón */}
        <View style={{ marginTop: 60, alignItems: "center" }}>
          <PrimaryButton
            title="Volver al inicio"
            onPress={() => router.replace("/(protected)/home")}
          />
        </View>
      </View>
    </View>
  );
}