//se ve bastante feo

// app/(protected)/emotions.tsx
import { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { colors } from "../../components/theme";
import BackHeader from "../../components/BackHeader";
import BottomNav from "../../components/BottomNav";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width: SCREEN_W } = Dimensions.get("window");
const SIDE = 22; // margen lateral

type Slide =
  | { id: string; kind: "intro" }
  | { id: string; kind: "note"; text: string };

const SLIDES: Slide[] = [
  { id: "intro", kind: "intro" },
  {
    id: "n1",
    kind: "note",
    text:
      "Durante tu recorrido en este proyecto demostraste un gran compromiso con tu objetivo principal, que fue mejorar tu salud. " +
      "Lograste adoptar nuevos hábitos alimenticios que te permitieron alcanzar cambios significativos, como dejar atrás medicamentos " +
      "y regular mejor tu consumo de ciertos alimentos. El vínculo positivo generado con los profesionales que te acompañaron fue clave " +
      "para afrontar los desafíos que surgieron en el camino.",
  },
  {
    id: "n2",
    kind: "note",
    text:
      "Reconocemos el esfuerzo y la determinación que invertiste, lo que te permitió mejorar físicamente y comenzar un camino terapéutico complementario que fortaleció tu relación con la alimentación."

      
  },
  {
    id: "n3",
    kind: "note",
    text:
      "Aunque enfrentar cambios personales importantes representó un gran desafío emocional hacia el final del proyecto, valoramos especialmente tu capacidad para reflexionar sobre estas situaciones y ajustar positivamente tu perspectiva. Observamos una clara recuperación de tu energía y motivación, manifestada en acciones concretas como retomar actividades saludables, fortalecer tu relación personal contigo misma, y priorizar tu bienestar integral."
  },
  {
    id: "n4",
    kind: "note",
    text:
      "Te animamos a sostener estos aprendizajes y hábitos, continuando con un camino enfocado en tu salud y bienestar personal."
  }
];

export default function Emotions() {
  const [index, setIndex] = useState(0);
  const listRef = useRef<FlatList<Slide>>(null);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / SCREEN_W);
    if (i !== index) setIndex(i);
  };

  const renderItem = ({ item }: { item: Slide }) => {
    if (item.kind === "intro") {
    return (
      <View style={{ width: SCREEN_W }}>
        <View
          style={{
            paddingHorizontal: SIDE,
            paddingTop: 26,              // ↓ más abajo que antes
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontWeight: "800",
              textAlign: "center",
              fontSize: 17,              // ↑ más grande
              lineHeight: 22,
              marginBottom: 130,
            }}
          >
            Deslizá Para Leer La Devolución{"\n"}Del Equipo De Bienestar
          </Text>

          {/* círculo con ícono de gesto */}
          <View
            style={{
              width: 240,
              height: 240,
              borderRadius: 120,
              backgroundColor: "#E8F6ED",
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 6,
            }}
          >
            <MaterialCommunityIcons
              name="gesture-swipe-horizontal" // alternativas: "gesture-swipe-right", "hand-swipe-right"
              size={120}
              color="#23C363"
            />
          </View>
        </View>
      </View>
    );
  }

    // Nota / devolución en tarjeta
    return (
      <View style={{ width: SCREEN_W }}>
        <View style={{ paddingHorizontal: SIDE, paddingTop: 18 }}>
          <View
            style={{
              backgroundColor: "#E8F6ED",
              borderRadius: 22,
              padding: 14,
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 6,
            }}
          >
            <Text
              style={{
                color: colors.text,
                fontSize: 15.5,
                lineHeight: 24,
                textAlign: "justify",
              }}
            >
              {item.text}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <BackHeader title="Seguimiento Emocional" />

      <FlatList
        ref={listRef}
        data={SLIDES}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 16 }}
      />

      {/* indicador + texto “Deslizá” */}
      <View style={{ alignItems: "center", marginBottom: 55 /* ↑ más arriba */ }}>
        <Text
          style={{
            color: colors.text,
            fontWeight: "800",
            fontSize: 20,                 // ↑ más grande
            marginBottom: 10,
          }}
        >
          Deslizá
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          {SLIDES.map((_, i) => (
            <View
              key={i}
              style={{
                width: i === index ? 12 : 10,    // ↑ más grandes
                height: i === index ? 12 : 10,
                borderRadius: 6,
                backgroundColor: i === index ? "#23C363" : "#B6C8BE",
              }}
            />
          ))}
        </View>
      </View>

      <BottomNav />
    </View>
  );
}