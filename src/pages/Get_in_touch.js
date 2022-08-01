import React, { useState, useEffect } from 'react'
import { InputText } from '../component/Input'
import { IconButton } from '../component/Button'
import { setValidation } from '../helpers/validation'

const errorMap = {
  name: true,
  email: true,
  phone: true,
  password: true,
  confirmedPassword: true,
}

export default function Get_in_touch() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState(false)
  const [errors, setErrors] = useState(errorMap)
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true)
  const [user, setUser] = useState({})

  useEffect(() => {
    const errorsValues = Object.values(errors)
    console.log('errorsValues', errorsValues)
    const isValid =
      errorsValues?.length > 0 && errorsValues.every((err) => err === false)
    console.log('isValid', isValid)
    if (isValid) {
      setIsDisabledSubmit(false)
    } else {
      setIsDisabledSubmit(true)
    }
  }, [errors])

  const validateForm = (name, value) => {
    let rule
    switch (name) {
      case 'name':
        rule = value.length > 3
        break
      case 'email':
        rule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        break
      case 'phone':
        rule = !value.match(/^\d{9}$/)
        break
      case 'password':
        rule = !!value.match(/^[A-Za-z]\w{7,14}$/)
        break
      case 'confirmedPassword':
        rule = !errors?.password && value === password
        break
      default:
        console.log('no rule')
    }
    setValidation(rule, name, setErrors)
  }

  const handleInputChange = ({ target: { name, value } }) => {
    validateForm(name, value)
    switch (name) {
      case 'name':
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
      case 'confirmedPassword':
        setConfirmedPassword(value)
        break
      default:
        setErrors((prev) => {
          return { ...prev, unknownInput: 'Input is not valid' }
        })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser((prev) => {
      return {
        ...prev,
        name,
        email,
        phone,
        password,
        confirmedPassword,
      }
    })
    console.log(user)
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
          name="confirmedPassword"
          placeholder="Confirme password"
          type="password"
          handleChange={handleInputChange}
        />

        <IconButton
          type="submit"
          label="register"
          handleClick={handleSubmit}
          isDisabled={isDisabledSubmit}
        />
      </form>
    </>
  )
}
