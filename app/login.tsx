// app/login.tsx
import { useState } from "react";
import { Text, Alert, Pressable } from "react-native";
import { router } from "expo-router";
import { AuthScaffold, Field, PrimaryButton, SecondaryButton } from "../components/ui";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { fakeUsers } from "../lib/fakedata"; //esto es para los datos fake. Despues sacarlo

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [busy, setBusy] = useState(false);

//Lo de abajo son datos simulados. Esto seria lo que hay que usar de verdad
/*   const onLogin = async () => {
    try {
      setBusy(true);
      await signInWithEmailAndPassword(auth, email.trim(), pass);
      router.replace("/(protected)/home");
    } catch (e: any) {
      Alert.alert("Error", e.message);
    } finally {
      setBusy(false);
    }
  }; */
  
  //datos fake:
 
  const onLogin = () => {
    const user = fakeUsers.find(
      (u) => u.email === email.trim() && u.password === pass
    );
    if (user) {
      router.replace("/(protected)/home");
    } else {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  };
  //----- fin datos fake

  return (
    // 👉 mismo layout que "Crear cuenta": header alto, back, tarjeta, logo abajo
    <AuthScaffold title="¡Bienvenido!" back>
      {/* Campos con el mismo estilo/espaciado que en Registro */}
      <Field
        label="Nombre completo o mail"
        placeholder="example@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Field
        label="Contraseña"
        placeholder="••••••••"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />

      {/* Botones con la misma jerarquía y márgenes */}
      <PrimaryButton title={busy ? "Ingresando..." : "Ingresar"} onPress={onLogin} />

      <Pressable onPress={() => router.push("/forgot")} style={{ alignSelf: "center", marginVertical: 12 }}>
        <Text style={{ textDecorationLine: "underline" }}>¿Olvidaste tu contraseña?</Text>
      </Pressable>

      <SecondaryButton title="Registrate" onPress={() => router.push("/register")} />

      <Text style={{ textAlign: "center", marginTop: 12 }}>
        ¿No tenés cuenta aún?{" "}
        <Text style={{ textDecorationLine: "underline" }} onPress={() => router.push("/register")}>
          Registrate
        </Text>
      </Text>
    </AuthScaffold>
  );
}