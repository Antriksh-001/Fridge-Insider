import React from "react";
import { Snackbar } from "react-native-paper";
import * as Screen from "../../constants/Screen";

const width = Screen.SCREEN_WIDTH;

const SnackBar = ({ error, setError }) => {
    return (
        <Snackbar
            visible={!!error}
            onDismiss={() => setError('')}
            action={{
                label: 'Close',
                onPress: () => setError(''),
            }}
            style={styles.snackbar}
        >
            {error}
        </Snackbar>
    )
}

const styles = {
    snackbar: {
        marginBottom: width / 39.1,
    },
}

export default SnackBar;