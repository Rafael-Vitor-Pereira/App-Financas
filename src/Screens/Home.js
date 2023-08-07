import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../Styles/MainStyle'
import Header from '../Components/Header'
import {SafeAreaView} from 'react-native-safe-area-context'
import Balance from '../Components/Balance'
import Lista from '../Components/Lista'
import Actions from '../Components/Actions'

const Home = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<View style={[styles.container, specificStyle.container]}>
				<Header name="Rafael Vitor" />

				<Balance saldo="9.250,90" gastos="-527,00" />

				<Actions />
				
				<Lista />
		</View>
		</SafeAreaView>
	)
}

export default Home

const specificStyle = StyleSheet.create({
	container: {
		backgroundColor: '#fafafa'
	}
})
