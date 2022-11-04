import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Titulo from '../components/titulo'

const Home = () => {
  return (
    <View>
      <Titulo/>
      <Text>Tela principal</Text>
      <View></View>
      <TouchableOpacity>
        <Text>
          Inciar
        </Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})