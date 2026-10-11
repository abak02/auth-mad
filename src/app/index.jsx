import { Redirect } from "expo-router";
import { useAuth } from "../../hooks/AuthContext";

export default function Index() {
  const { user } = useAuth();

  return (
    <Redirect href={user ? "/home" : "/login"} />
  );
}