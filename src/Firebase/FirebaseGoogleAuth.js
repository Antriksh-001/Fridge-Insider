import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';

GoogleSignin.configure({
    webClientId: '725327738963-s1sedj4i2ap1ovp98gluo4oic0ri7c04.apps.googleusercontent.com',
});

export const createProfile = async (response) => {
    const { user } = response;
    const { uid, displayName, email, photoURL } = user;
    await db().ref(`/users/${uid}`).set({ displayName , email, profilePictureURL: photoURL, uid });
};

export const signInWithGoogle = async (setLoadingModalVisible) => {
    try {
        setLoadingModalVisible(true);
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const response = await auth().signInWithCredential(googleCredential);
        if(response){
            await createProfile(response);
        }
        return response.user;
    } catch (error) {
        console.log('Error signing in with Google:', error);
        throw error;
    } finally {
        setLoadingModalVisible(false);
    }
};

export const signOutFromGoogle = async () => {
    try {
        // Sign out from Firebase Authentication
        await auth().signOut();

        // Sign out from Google Sign-In
        await GoogleSignin.signOut();
    } catch (error) {
        console.log('Error signing out:', error);
    }
};