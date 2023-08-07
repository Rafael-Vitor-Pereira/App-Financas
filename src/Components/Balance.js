import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {MotiView} from 'moti'

const Balance = ({saldo, gastos}) => {
	return (
		<MotiView style={[specificStyle.container]} 
			from={{rotateX: '-100deg', opacity: 0}} 
			animate={{rotateX: "0deg", opacity: 1}} 
			transition={{type: 'timing', delay: 300, duration: 900}}
		>
			<View style={specificStyle.item}>
				<Text style={specificStyle.itemTitle}>Saldo</Text>
				<View style={specificStyle.content}>
					<Text style={specificStyle.currencySymbol}>R$</Text>
					<Text style={specificStyle.balance}>{saldo}</Text>
				</View>
			</View>
			<View style={specificStyle.item}>
				<Text style={specificStyle.itemTitle}>Gastos</Text>
				<View style={specificStyle.content}>
					<Text style={specificStyle.currencySymbol}>R$</Text>
					<Text style={specificStyle.expenses}>{gastos}</Text>
				</View>
			</View>
		</MotiView>
	)
}

export default Balance

const specificStyle = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingStart: 18,
		paddingEnd: 18,
		marginTop: -24,
		marginStart: 14,
		marginEnd: 14,
		borderRadius: 4,
		paddingTop: 22,
		paddingBottom: 22,
		zIndex: 99
	},
	itemTitle: {
		fontSize: 20,
		color: '#DADADA'
	},
	content: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	currencySymbol: {
		color: '#DADADA',
		marginRight: 6
	},
	balance: {
		fontSize: 22,
		color: '#2ecc71'
	},
	expenses: {
		fontSize: 22,
		color: '#e74c3c'
	}
})