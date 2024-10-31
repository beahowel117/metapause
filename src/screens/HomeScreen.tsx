import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type HomePageProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomePageProps> = ({navigation}) => {
    const [isHovered, setIsHovered] = useState(false);
    StatusBar.setHidden(true);
    return (
        <LinearGradient
            colors={['#F1E9FF', '#F5FBFF', '#FBE9FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.container, {width: '100%', height: '100%'}]}
        >
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
                <Swiper>
                    <View style={styles.content}>
                        <Text style={styles.welcomeText}>Welcome to</Text>
                        <Text style={styles.mainTitle}>The MetaPause</Text>
                        <Text style={styles.subtitle}>Your personalized marketplace for women's health and longevity.</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>What if you could{' '}
                            <Text style={styles.boldPurple}>choose</Text>{' '}
                            <Text style={{color: '#796EFF' }}>how you age</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>What if you could{' '}
                            <Text style={styles.boldPurple}>thrive</Text>{' '}
                            <Text style={{color: '#796EFF' }}>for the rest of your life</Text>
                         </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>What if you could{' '} 
                            <Text style={styles.boldPurple}>look forward</Text>{' '}
                            <Text style={{color: '#796EFF' }}>to birthdays again</Text>
                        </Text>
                    </View>
                </Swiper>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
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
        backgroundColor: '#5349CB',
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
        fontSize: 44,
        fontFamily: 'ElMessiri-Regular',
        fontWeight: 'bold',
        color: '#002C6B',
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
  boldPurple: {
    fontWeight: 'bold',
    color: '#796EFF'
  },
  text: {
    width: 300,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 175,
    marginLeft: 25
  }
});

export default HomeScreen; 