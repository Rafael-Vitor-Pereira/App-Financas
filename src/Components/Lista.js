import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from '../Styles/MainStyle'
import dados from './Dados'
import Movements from './Movements'

const Lista = () => {
	return (
		<>
			<Text style={styles.title}>Ultimas movimentações</Text>
			<FlatList style={styles.lista} data={dados} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false}
				renderItem={({item}) => <Movements item={item} />}
			/>
		</>
	)
}

export default Lista