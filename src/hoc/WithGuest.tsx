import { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export default function WithGuest({ children }: IProps) {
  const [user, setUser] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser(true);
      else setUser(null);

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return null;

  if (user) return <Navigate to="/" />;

  return children;
}
