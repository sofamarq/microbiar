import { useState } from "react";
import { Alert, Text } from "react-native";
import { router } from "expo-router";
import { AuthScaffold, Field, PrimaryButton, SecondaryButton } from "../components/ui";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  const onSend = async () => {
    if (!email) return Alert.alert("Atención", "Ingresá tu email.");
    try {
      setBusy(true);
      await sendPasswordResetEmail(auth, email.trim());
      router.push("/reset-done");
    } catch (e: any) {
      Alert.alert("Error", e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <AuthScaffold title="Recuperá tu contraseña" back>
      <Text style={{ marginBottom: 12 }}>
        Para recuperar tu contraseña ingresá tu mail y te enviaremos un enlace para validarla.
      </Text>
      <Field label="Ingresá tu mail" placeholder="ejemplo@ejemplo.com" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <PrimaryButton title={busy ? "Enviando..." : "Siguiente"} onPress={onSend} />
      <SecondaryButton title="Volver" onPress={() => router.back()} />
    </AuthScaffold>
  );
}