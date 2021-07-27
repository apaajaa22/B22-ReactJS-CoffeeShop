/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { IcGoogle } from '../../assets'
import {
  Alert,
  Button,
  Footer,
  Form,
  Header,
  SectionBar,
} from '../../components'
import { authRegister } from '../../redux/actions/register'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

function Register(props) {
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const { message } = props.message
  const { isRegister } = props.register

  const isLogin = () => {
    if (isRegister) {
      history.push('/login')
      Toast.fire({
        icon: 'success',
        title: 'Register successfully'
      })
    }
  }
  useEffect(() => {
    isLogin()
  }, [isLogin])

  const onRegister = () => {
    props.authRegister(email, password, phoneNumber)
  }

  return (
    <div>
      <div className="flex flex-row ">
        <div className=" flex-1 bg-bg-form h-widthSection bg-cover bg-no-repeat hidden md:block " />
        <div className="flex-1">
        <header className='hidden md:block'>
          <Header type="form" label="Login" navigation="/login" />
        </header>
          <main className="md:mt-20">
            <section>
              <h3 className="text-center font-bold text-2xl text-red-900">
                Sign Up
              </h3>
              {message !== '' && <Alert message={message} />}
              <div className="space-y-6 mb-8 px-10 md:px-32">
                <Form
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email Address :"
                  placeholder="Enter your email address"
                />
                <Form
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password :"
                  placeholder="Enter your email password"
                />
                <Form
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  label="Phone Number :"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="px-10 md:px-32 pb-10 space-y-5">
                <Button onClick={onRegister} type="square" text="Sign Up" />
                <Button
                  type="squaresec"
                  text="Sign Up with Google"
                  icon={IcGoogle}
                />
              </div>
            </section>
          </main>
        </div>
      </div>
      <div className='hidden md:block'>
      <SectionBar
        type="info"
        title="Get your member card now!"
        subTitle="Let's join with our member and enjoy the deals."
        buttonName="Create Now"
      />
      </div>
      <footer className="px-32 py-20 hidden md:block">
        <Footer />
      </footer>
    </div>
  )
}
const mapStateToProps = (state) => ({
  message: state.message,
  register: state.register,
})
const mapDispatchToProps = { authRegister }

export default connect(mapStateToProps, mapDispatchToProps)(Register)
