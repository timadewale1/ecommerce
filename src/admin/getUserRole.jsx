import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const getUserRole = async (uid) => {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      // Assuming you have a field named "role" in your user document
      return userData.role || "user"; // Default to "user" role if role is not defined
    } else {
      // If the user document does not exist, you might want to handle this case accordingly
      return "user"; // Default to "user" role
    }
  } catch (error) {
    console.error("Error getting user role:", error);
    return "user"; // Default to "user" role in case of an error
  }
};

export { getUserRole };
