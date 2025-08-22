// app/terms.tsx
import { Text, View, ScrollView } from "react-native";
import { AuthScaffold } from "../components/ui";

export default function Terms() {
  return (
    <AuthScaffold title="Términos y Condiciones" back>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ fontSize: 16, lineHeight: 22, marginBottom: 12 }}>
          Aquí irán los términos y condiciones detallados.  
          Por ahora esta pantalla está vacía, pero vamos a darle formato más adelante.
        </Text>
      </ScrollView>
    </AuthScaffold>
  );
}