import React, { useState, useEffect } from 'react'
import { InputText } from '../component/Input'
import { IconButton } from '../component/Button'

export default function Get_in_touch() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true)

  const [user, setUser] = useState({})

  useEffect(() => {
    // console.log('name', name)
    // console.log('email', email)
    // console.log('phone', phone)
    // console.log('password', password)
    // console.log('error',error);
  }, [name, email, phone, password, errors])

  useEffect(() => {
    // console.log('user', user)
  }, [user])

  useEffect(() => {
    console.log('errors', errors)
  }, [errors])

  // useEffect(() => {
  //   const errorsValues = Object.values(errors)
  //   console.log('errorsValues', errorsValues)
  //   const isValid = errorsValues ?.length > 0 && errorsValues.every((err)=>)
  // })

  const validateName = (name, value) => {
    console.log('valid', value)
    const rule = value.length > 3
    if (rule) {
      // console.log('valid', value)
    } else {
      // console.log('value is invalid')
      setErrors((prev) => {
        return { ...prev, [name]: false }
      })
    }
  }

  // const validateEmail = (name, value) => {
  //    const rule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)

  const handleInputChange = ({ target: { name, value } }) => {
    console.log('name&value', name, value)
    switch (name) {
      case 'name':
        validateName(value)
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'phone':
        setPhone(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        setErrors((prev) => {
          return { ...prev, unknownInput: 'Input is not valid' }
        })
    }
    // setUser((prev) => {
    //   return { ...prev, [name]: value }
    // })

    // setUser({ [name]: value })
  }

  return (
    <>
      <form>
        <InputText
          name="name"
          placeholder="User name"
          handleChange={handleInputChange}
        />
        <InputText
          name="email"
          placeholder="User email"
          type="email"
          handleChange={handleInputChange}
        />
        <InputText
          name="phone"
          placeholder="User phone"
          type="tel"
          handleChange={handleInputChange}
        />
        <InputText
          name="password"
          placeholder="User password"
          type="password"
          handleChange={handleInputChange}
        />
        <InputText
          name="confirmepassword"
          placeholder="Confirme password"
          type="password"
          handleChange={handleInputChange}
        />

        <IconButton
          type="submit"
          label="register"
          handleClick={(e) => {
            e.preventDefault()
            // console.log('click')
          }}
          isDisabled={isDisabledSubmit}
        />
      </form>
    </>
  )
}
