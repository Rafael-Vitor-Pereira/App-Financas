import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import {MotiView, AnimatePresence, MotiText} from 'moti'

const Movements = ({item}) => {
	const [showValue, setShowValue] = useState(false);

	return (
		<TouchableOpacity style={specificStyle.button} onPress={() => setShowValue(!showValue)}>
			<Text style={specificStyle.date}>{item.date}</Text>
			<View style={specificStyle.content}>
				<Text style={specificStyle.label}>{item.label}</Text>
				{showValue ? (
					<AnimatePresence exitBeforeEnter>
						<MotiText style={item.type == 1 ? specificStyle.value : specificStyle.expenses} 
							from={{translateX: 100}} 
							animate={{translateX: 0}}
							transition={{type: 'spring', duration: 500}}
						>
							{item.type == 1 ? `R$ ${item.value}` : `R$ -${item.value}`}
						</MotiText>
					</AnimatePresence>
				) : (
					<AnimatePresence exitBeforeEnter>
						<MotiView style={specificStyle.skeleton} from={{opacity: 0}} animate={{opacity: 1}} transition={{type: 'timing'}}>

						</MotiView>
					</AnimatePresence>
				)}
			</View>
		</TouchableOpacity>
	)
}

export default Movements

const specificStyle = StyleSheet.create({
	button: {
		flex: 1,
		marginBottom: 24,
		borderBottomWidth: 0.5,
		borderBottomColor: '#DADADA'
	},
	date: {
		color: '#DADADA',
		fontWeight: 'bold'
	},
	content: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 2,
		marginBottom: 8
	},
	label: {
		fontWeight: 'bold',
		fontSize: 16
	},
	value: {
		fontSize: 16,
		color: '#2ecc71',
		fontWeight: 'bold'
	},
	expenses: {
		fontSize: 16,
		color: '#e74c3c',
		fontWeight: 'bold'
	},
	skeleton: {
		marginTop: 6,
		width: 80,
		height: 10,
		backgroundColor: '#DADADA',
		borderRadius: 8
	}
})