import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../Styles/MainStyle'
import {Feather} from '@expo/vector-icons'
import {MotiView, MotiText} from 'moti'

const Header = ({name}) => {
	return (
		<View style={styles.header}>
			<MotiView style={specificStyle.content} 
				from={{ translateY: -150, opacity: 0 }} 
				animate={{ translateY: 0, opacity: 1 }} 
				transition={{ type: "spring", duration: 800, delay: 300 }}
			>
				<MotiText style={specificStyle.userName} 
					from={{translateX: -300}} 
					animate={{translateX: 0}} 
					transition={{type: "timing", duration: 800, delay: 800}}
				>
					{name}
				</MotiText>
				<TouchableOpacity activeOpacity={0.9} style={specificStyle.buttonUser}>
					<Feather name='user' size={27} color="#FFF" />
				</TouchableOpacity>
			</MotiView>
		</View>
	)
}

export default Header

const specificStyle = StyleSheet.create({
	content: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	userName :{
		fontSize: 18,
		color: '#FFF',
		fontWeight: 'bold'
	},
	buttonUser: {
		width: 44,
		height: 44,
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 44 / 2
	}
})