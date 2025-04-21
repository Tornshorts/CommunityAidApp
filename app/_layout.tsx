import { Slot } from "expo-router";
import { AuthProvider } from "../auth-context";

export default function Layout() {
  return (
    <AuthProvider >
      <Slot />
    </AuthProvider>
  );
}
