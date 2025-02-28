import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  AuthError,
} from "firebase/auth";
// LOGIN
export const singInWithFirebase = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password);

    const user = response.user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

// CREATE USER
export const createUserWithFirebase = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const auth = getAuth();
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Пользователь зарегестрировался");

    const user = response.user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

// LOGOUT

export const logOutUser = async () => {
  try {
    const auth = getAuth();
    await signOut(auth); // Разлогиниваем пользователя
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
