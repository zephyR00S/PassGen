import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'



// Form validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Pasword should be minimum of 4 characters')
  .max(15, 'Password should be maximum of 15 characters')
  .required('Length is required')
  
})

export default function App() {
//1st is variable and 2nd is a method
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setupperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  //generate password string
  const generatePassword = (passwordLength: number) => {

  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random()*characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  //resetting the state of the password
  const resetPassword = () => {

  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})