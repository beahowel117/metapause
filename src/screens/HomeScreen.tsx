import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <View style={styles.container}>
            {/*Header with buttons */}
            <View style={styles.header}>
                <TouchableOpacity
                style={[ isHovered && styles.buttonTextHover]}
                onPressIn={() => setIsHovered(true)}
                onPressOut={() => setIsHovered(false)}
                >
                <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={[styles.buttonText, isHovered && styles.buttonTextHover]}
                onPressIn={() => setIsHovered(true)}
                onPressOut={() => setIsHovered(false)}
                >
                <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.menuIcon}>
                    <View style={styles.menuLine} />
                    <View style={styles.menuLine} />
                </View>
            </View>
            {/*Title and SubTitle */}
            <View style={styles.content}>
                <Text style={styles.welcomeText}>Welcome to</Text>
                <Text style={styles.mainTitle}>The MetaPause</Text>
                <Text style={styles.subtitle}>Your personalized marketplace for women's health and longevity.</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F3F4F6',
        paddingTop: 80,
    },
    header: {
        position: 'absolute',
        top: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '90%',
        paddingHorizontal: 20,
    },
    loginText: {
        color: '#333',
        fontSize: 16,
    },
    buttonText:{
        backgroundColor: '#6c63ff',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20, 
    },
    buttonTextHover: {
        backgroundColor: '#7a6cf0'
    },

    signUpText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
      },
    content: {
        alignItems: 'center',
        marginBottom: 50,
        paddingHorizontal: 20
      },
    welcomeText: {
        fontSize: 20,
        color: '#333',
        marginBottom: 10,
    },
    mainTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1A237E',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginTop: 10,
    },
    menuIcon: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 20,
    },
    menuLine: {
        width: 18,
        height: 2,
        backgroundColor: '#333'
    },
 
    brandName: {
        fontSize: 36,
        color: '#1D3557',
        fontWeight: 'bold',
    },
   
});

export default HomeScreen; 