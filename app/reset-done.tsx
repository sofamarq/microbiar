import { View, Text } from "react-native";
import { colors } from "../components/theme";
import BottomNav from "../components/BottomNav";
import BackHeader from "../components/BackHeader";
import LottieView from "lottie-react-native";

export default function ResetDone() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <BackHeader title="Seguridad" />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        {/* 👇 Aquí va tu animación */}
        <LottieView
          source={require("../assets/success.json")} // asegurate que el JSON esté ahí
          autoPlay
          loop={false}
          style={{ width: 180, height: 180 }}
        />

        <Text
          style={{
            marginTop: 24,
            fontSize: 18,
            fontWeight: "600",
            color: colors.text,
            textAlign: "center",
          }}
        >
          La contraseña se cambió correctamente
        </Text>
      </View>

      <BottomNav />
    </View>
  );
}