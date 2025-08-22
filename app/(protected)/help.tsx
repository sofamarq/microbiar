import { View, Text, Pressable } from "react-native";
import BackHeader from "../../components/BackHeader";
import BottomNav from "../../components/BottomNav";
import { colors } from "../../components/theme";
import { Linking } from "react-native";

const Q = ({ children }: any) => <Text style={{ fontWeight: "800", color: colors.text, marginTop: 10 }}>{children}</Text>;
const A = ({ children }: any) => <Text style={{ color: colors.text, opacity: 0.9, marginTop: 4 }}>{children}</Text>;

export default function Help() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <BackHeader title="Ayuda y Preguntas Frecuentes" />

      <View style={{ padding: 18 }}>
        <Q>¿Cómo me registro?</Q>
        <A>Desde la pantalla de registro con tu email y contraseña.</A>

        <Q>¿Cómo cambio mi contraseña?</Q>
        <A>En Perfil &gt; Seguridad.</A>

        <Q>¿Cómo contacto al soporte?</Q>
        <A>Escribinos por correo o redes.</A>

        <Pressable onPress={() => Linking.openURL("mailto:soporte@microbiar.com")} style={{ marginTop: 14 }}>
          <Text style={{ color: "#1D4ED8", textDecorationLine: "underline" }}>soporte@microbiar.com</Text>
        </Pressable>
      </View>
        <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
              <BottomNav />
            </View>
    </View>
  );
}