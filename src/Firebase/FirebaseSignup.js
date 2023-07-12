import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';

export const createProfile = async (response, name, email, password) => {
    const { user } = response;
    const { uid, photoURL } = user;
    console.log(user);
    await db().ref(`/users/${uid}`).set({ name, email, password, profilePictureURL: photoURL, uid });
};

export const registerUserWithEmailAndPassword = async (email, password) => {
    try {
        const response = await auth().createUserWithEmailAndPassword(email, password);
        console.log('User account created & signed in!');
        return response;
    } catch (error) {
        throw error;
    }
};

export const sendEmailVerification = async (user) => {
    try {
        await user.sendEmailVerification();
        console.log('Email verification sent');
    } catch (error) {
        console.error('Error sending email verification:', error);
        throw new Error('Email verification failed');
    }
};

export const handleSignup = async (email, password, name, confirmPass, setLoading, setError, props) => {
    if (email && password && name && confirmPass) {
        if (password === confirmPass) {
            try {
                setLoading(true); // Start loader
                const response = await registerUserWithEmailAndPassword(email, password);
                console.log('User account created & signed in!');

                if (response) {
                    await createProfile(response, name, email, password);
                    props.changeScreen('AuthenticationPage');
                }
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    setError('That email address is already in use!');
                } else if (error.code === 'auth/invalid-email') {
                    setError('That email address is invalid!');
                } else if (error.code === 'auth/weak-password') {
                    setError('Password should be at least 6 characters');
                } else {
                    setError('An error occurred during registration.');
                }
                console.error(error);
            } finally {
                setLoading(false); // Stop loader
            }
        } else {
            setError('Password and Confirm Password do not match');
        }
    } else {
        setError('Please fill in all fields');
    }
};
