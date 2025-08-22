import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import BottomNav from "../../components/BottomNav";
import { colors } from "../../components/theme";
import { router } from "expo-router";

const user = { name: "Juan Pérez", memberSince: "JUNIO 2022" };

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      {/* HEADER verde más alto */}
      <View
        style={{
          backgroundColor: colors.primary,
          paddingTop: 60,
          paddingBottom: 100, // ⬅ mucho más bajo
          paddingHorizontal: 22,
          borderBottomLeftRadius: 36,
          borderBottomRightRadius: 36,
        }}
      >
        {/* Iconos arriba derecha */}
        <View
          style={{
            position: "absolute",
            right: 22,
            top: 80,
            flexDirection: "row",
            gap: 12,
          }}
        >
          <Pressable
            onPress={() => router.push("/(protected)/support")}
            style={{
              width: 38,
              height: 38,
              borderRadius: 19,
              backgroundColor: "rgba(255,255,255,0.9)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="help-circle" size={20} color={colors.text} />
          </Pressable>
          <Pressable
            onPress={() => router.push("/(protected)/profile")}
            style={{
              width: 38,
              height: 38,
              borderRadius: 19,
              backgroundColor: "rgba(255,255,255,0.9)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="user" size={20} color={colors.text} />
          </Pressable>
        </View>

        {/* Texto saludo más abajo */}
        <Text
          style={{
            color: "white",
            fontWeight: "900",
            fontSize: 32,
            marginTop: 75, // ⬅ más abajo
          }}
        >
          Hola, {user.name}!
        </Text>
      </View>

      {/* CONTENIDO */}
      <ScrollView contentContainerStyle={{ paddingVertical: 22 }}>
        {/* Tarjeta más grande y menos ancha */}
        <View
          style={{
            alignSelf: "center",
            width: "82%", // ⬅ 80–85% ancho
            backgroundColor: "#DFF5E7",
            borderRadius: 28,
            padding: 20,
            minHeight: 160, // ⬅ más alta
            flexDirection: "row",
            alignItems: "center",
            gap: 18,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 6,
          }}
        >
          <Image
            source={require("../../assets/logo-mark.png")}
            style={{ width: 72, height: 72 }}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{ color: colors.text, fontWeight: "900", fontSize: 18 }}
            >
              Parte de MicrobiAr desde
            </Text>
            <View
              style={{
                height: 2,
                backgroundColor: "#DAE9DF",
                marginVertical: 8,
                width: "70%",
              }}
            />
            <Text
              style={{ color: "#1D4ED8", fontWeight: "900", fontSize: 18 }}
            >
              {user.memberSince}
            </Text>
          </View>
        </View>

        {/* Texto descriptivo con más interlineado */}
        {/* Texto descriptivo con justificado y márgenes iguales a la tarjeta */}
        <View style={{ width: "80%", alignSelf: "center", marginTop: 23 }}>
          <Text
            style={{
              fontSize: 17,
              lineHeight: 30,
              color: colors.text,
              textAlign: "justify", // ⬅ justificado
            }}
          >
            Aquí podés encontrar toda la información de tu paso por MicrobiAr,
            como datos clínicos y de sueño, cambios en la microbiota, un
            seguimiento emocional y un recetario preparado por los
            nutricionistas.
          </Text>

          <View style={{ alignItems: "center", marginTop: 45 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "900",
                color: colors.text,
                marginBottom: 12,
              }}
            >
              ¡Gracias por ser parte!
            </Text>
            <Image
              source={require("../../assets/splash.png")}
              style={{ width: 200, height: 52, resizeMode: "contain" }}
            />
          </View>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}