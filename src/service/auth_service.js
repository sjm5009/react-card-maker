import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

class AuthProvider {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleAuthProvider = new GoogleAuthProvider();
    this.githubAuthProvider = new GithubAuthProvider();
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleAuthProvider;
      case "GitHub":
        return this.githubAuthProvider;
      default:
        throw new Error("no login case");
    }
  }

  onAuthChanged(onUserChange) {
    onAuthStateChanged(this.firebaseAuth, (user) => {
      onUserChange(user);
    });
  }

  logout(goNavigation) {
    signOut(this.firebaseAuth)
      .then(() => {})
      .catch((error) => {});
  }
}

export default AuthProvider;
