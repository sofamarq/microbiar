import { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Linking,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import BackHeader from "../../components/BackHeader";
import BottomNav from "../../components/BottomNav"; // o tu BottomNav
import { colors } from "../../components/theme";
import { Feather } from "@expo/vector-icons";

// Habilitar animación de layout en Android para abrir/cerrar acordeón
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type FAQ = { id: string; q: string; a: string };

const FAQS: FAQ[] = [
  {
    id: "1",
    q: "¿Cómo usar la app MicrobiAr?",
    a: "Explorá el Home y el menú inferior. Los módulos muestran tus datos clínicos, microbiota, recetario y seguimiento emocional.",
  },
  {
    id: "2",
    q: "¿Cómo contacto para ayuda?",
    a: "Desde esta pantalla podés escribirnos por email o visitar nuestro sitio y redes.",
  },
  {
    id: "3",
    q: "¿Cómo reseteo mi contraseña si la olvidé?",
    a: "Desde la pantalla de login, tocá “¿Olvidaste tu contraseña?” y seguí los pasos.",
  },
  {
    id: "4",
    q: "¿Cómo accedo a mi información clínica?",
    a: "Ingresá a la sección “Datos clínicos” y elegí el parámetro que quieras visualizar.",
  },
  {
    id: "5",
    q: "¿Puedo usar la app sin Wi-Fi?",
    a: "Necesitás conexión para sincronizar y actualizar información.",
  },
];

const ContactRow = ({
  label,
  icon,
  onPress,
}: {
  label: string;
  icon: keyof typeof Feather.glyphMap;
  onPress: () => void;
}) => (
  <Pressable
    onPress={onPress}
    style={{
      backgroundColor: "#fff",
      borderRadius: 14,
      paddingVertical: 14,
      paddingHorizontal: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10,
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
      <Feather name={icon} size={18} color={colors.primary} />
      <Text style={{ color: colors.text }}>{label}</Text>
    </View>
    <Feather name="chevron-right" size={18} color="#9CA3AF" />
  </Pressable>
);

export default function Help() {
  const [tab, setTab] = useState<"faq" | "contact">("faq");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQS;
    return FAQS.filter(
      (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [query]);

  const toggle = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenId((curr) => (curr === id ? null : id));
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <BackHeader title="Ayuda" />

      {/* Tarjeta superior con selector */}
      <View
        style={{
          marginHorizontal: 18,
          marginTop: 14,
          backgroundColor: "#EAF7EF",
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          borderBottomLeftRadius: 18,
          borderBottomRightRadius: 18,
          padding: 14,
        }}
      >
        <Text style={{ textAlign: "center", color: colors.text, marginBottom: 10 }}>
          ¿Cómo podemos ayudarte?
        </Text>

        {/* Selector de pestañas */}
        <View
          style={{
            backgroundColor: "#DFF3E7",
            borderRadius: 999,
            flexDirection: "row",
            padding: 6,
            gap: 6,
            marginBottom: 12,
          }}
        >
          <Pressable
            onPress={() => setTab("faq")}
            style={{
              flex: 1,
              backgroundColor: tab === "faq" ? "#23C363" : "transparent",
              borderRadius: 999,
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                color: tab === "faq" ? "#083344" : colors.text,
                fontWeight: "700",
              }}
            >
              Preguntas frecuentes
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setTab("contact")}
            style={{
              flex: 1,
              backgroundColor: tab === "contact" ? "#23C363" : "transparent",
              borderRadius: 999,
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                color: tab === "contact" ? "#083344" : colors.text,
                fontWeight: "700",
              }}
            >
              Contáctanos
            </Text>
          </Pressable>
        </View>

        {/* Buscador (solo en FAQ) */}
        {tab === "faq" && (
          <TextInput
            placeholder="Buscar"
            value={query}
            onChangeText={setQuery}
            placeholderTextColor="#7CA18C"
            style={{
              backgroundColor: "#fff",
              borderColor: "#8DD6AE",
              borderWidth: 1,
              borderRadius: 12,
              paddingHorizontal: 14,
              height: 42,
            }}
          />
        )}
      </View>

      {/* Contenido de cada pestaña */}
      <View style={{ paddingHorizontal: 18, paddingTop: 14, paddingBottom: 96 }}>
        {tab === "faq" ? (
          filtered.map((f) => {
            const open = f.id === openId;
            return (
              <View key={f.id} style={{ marginBottom: 10 }}>
                <Pressable
                  onPress={() => toggle(f.id)}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 14,
                    paddingVertical: 14,
                    paddingHorizontal: 16,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: colors.text, fontWeight: "700", flex: 1 }}>
                    {f.q}
                  </Text>
                  <Feather
                    name={open ? "chevron-up" : "chevron-down"}
                    size={18}
                    color="#9CA3AF"
                  />
                </Pressable>

                {open && (
                  <View
                    style={{
                      backgroundColor: "#F6FBF8",
                      borderBottomLeftRadius: 14,
                      borderBottomRightRadius: 14,
                      marginTop: -6,
                      paddingHorizontal: 16,
                      paddingVertical: 12,
                    }}
                  >
                    <Text style={{ color: colors.text }}>{f.a}</Text>
                  </View>
                )}
              </View>
            );
          })
        ) : (
          <>
            <ContactRow
              label="Sitio Web"
              icon="globe"
              onPress={() => Linking.openURL("https://microbiar.com")}
            />
            <ContactRow
              label="Mail"
              icon="mail"
              onPress={() => Linking.openURL("mailto:soporte@microbiar.com")}
            />
            <ContactRow
              label="Instagram"
              icon="instagram"
              onPress={() => Linking.openURL("https://instagram.com/microbiar")}
            />
          </>
        )}
      </View>

      {/* Menú fijo abajo */}
      <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <BottomNav />
      </View>
    </View>
  );
}