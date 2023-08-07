import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'

const Actions = () => {
	return (
		<ScrollView style={specificStyle.container} horizontal showsHorizontalScrollIndicator={false}>
			<TouchableOpacity style={specificStyle.actionButton}>
				<View style={specificStyle.areaButton}>
					<AntDesign name='addfolder' size={26} color="#000" />
				</View>
				<Text style={specificStyle.labelbutton}>Entradas</Text>
			</TouchableOpacity>

			<TouchableOpacity style={specificStyle.actionButton}>
				<View style={specificStyle.areaButton}>
					<AntDesign name='tagso' size={26} color="#000" />
				</View>
				<Text style={specificStyle.labelbutton}>Compras</Text>
			</TouchableOpacity>

			<TouchableOpacity style={specificStyle.actionButton}>
				<View style={specificStyle.areaButton}>
					<AntDesign name='creditcard' size={26} color="#000" />
				</View>
				<Text style={specificStyle.labelbutton}>Carteira</Text>
			</TouchableOpacity>

			<TouchableOpacity style={specificStyle.actionButton}>
				<View style={specificStyle.areaButton}>
					<AntDesign name='barcode' size={26} color="#000" />
				</View>
				<Text style={specificStyle.labelbutton}>Boletos</Text>
			</TouchableOpacity>

			<TouchableOpacity style={specificStyle.actionButton}>
				<View style={specificStyle.areaButton}>
					<AntDesign name='setting' size={26} color="#000" />
				</View>
				<Text style={specificStyle.labelbutton}>Conta</Text>
			</TouchableOpacity>
		</ScrollView>
	)
}

export default Actions

const specificStyle = StyleSheet.create({
	container: {
		maxHeight: 84,
		marginBottom: 14,
		marginTop: 18,
		paddingStart: 14,
		paddingEnd: 14
	},
	actionButton: {
		alignItems: 'center',
		marginRight: 32
	},
	areaButton: {
		backgroundColor: '#ecf0f1',
		height: 60,
		width: 60,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	labelbutton: {
		marginTop: 4,
		textAlign: 'center',
		fontWeight: 'bold'
	}
})