import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';



const HomeScreen: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    StatusBar.setHidden(true);
    return (
        <View style={styles.container}>
            {/*Header with buttons */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.loginButton}
                >
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.signUpButton, isHovered && styles.buttonTextHover]}
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
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        // justifyContent: 'space-between',
        // width: '90%',
        top: 20,
        right: 20,
    },
    loginButton: {
        paddingHorizontal: 10,
    },
    loginText: {
        color: '#333',
        fontSize: 16,
    },
    signUpButton: {
        backgroundColor: '#6c63ff',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginLeft: 10, // space between Log In and Sign Up
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
        marginTop: 150, // Adjust spacing to push the content down
        paddingHorizontal: 20,
    },
    welcomeText: {
        fontSize: 20,
        color: '#333',
        marginBottom: 5,
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
        marginLeft: 10, // space between Sign Up button and menu icon
    },
    menuLine: {
        width: 18,
        height: 2,
        backgroundColor: '#333'
    },
});

export default HomeScreen; 