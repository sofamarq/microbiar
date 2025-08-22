import { useState } from "react";
import { Text, Alert } from "react-native";
import { AuthScaffold, Field, PrimaryButton } from "../components/ui";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../lib/firebase";
import { router } from "expo-router";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);

  const onRegister = async () => {
    if (!email || !pass) return Alert.alert("Atención", "Completá email y contraseña.");
    if (pass !== confirm) return Alert.alert("Atención", "Las contraseñas no coinciden.");
    try {
      setBusy(true);
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), pass);
      if (fullName) await updateProfile(cred.user, { displayName: fullName });
      // Podés redirigir al dashboard si querés
      // router.replace("/(protected)/dashboard");
      Alert.alert("Listo", "Cuenta creada. Ahora podés ingresar.");
    } catch (e: any) {
      Alert.alert("Error", e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <AuthScaffold title="Creá una cuenta" back>
      <Field label="Nombre completo" placeholder="Nombre y Apellido" value={fullName} onChangeText={setFullName} />
      <Field label="Email" placeholder="ejemplo@ejemplo.com" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <Field label="Contraseña" placeholder="••••••••" secureTextEntry value={pass} onChangeText={setPass} />
      <Field label="Confirmar contraseña" placeholder="••••••••" secureTextEntry value={confirm} onChangeText={setConfirm} />
      <PrimaryButton title={busy ? "Creando..." : "Crear cuenta"} onPress={onRegister} />
      <Text style={{ textAlign: "center", marginTop: 8 }}>
        Al crear una cuenta aceptás los{" "}
        <Text
          style={{ textDecorationLine: "underline", color: "#1D4ED8" }}
          onPress={() => router.push("/terms")}
        >
          Términos y Condiciones
        </Text>.
      </Text>
    </AuthScaffold>
  );
}
