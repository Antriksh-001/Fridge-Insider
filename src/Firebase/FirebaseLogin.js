import auth from '@react-native-firebase/auth';

export const handleLogin = async (email, password, changeScreen, setLoading, setError) => {
    console.log('Login Button Pressed');

    try {
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setLoading(true); // Activate the loading spinner
        const response = await auth().signInWithEmailAndPassword(email, password);

        if (response) {
            changeScreen('GetStarted');
            console.log('User Logged In');
        }
    } catch (error) {
        console.log('error: ', error);
        setError('Wrong credentials. Please try again.');
    }
    setLoading(false); // Deactivate the loading spinner
};

const isValidEmail = (email) => {
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
