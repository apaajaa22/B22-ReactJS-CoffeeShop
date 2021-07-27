/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { BsPencil } from 'react-icons/bs'
import { Button, Footer, FormProfile, Header } from '../../components'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { connect } from 'react-redux'
import { getUser } from '../../redux/actions/users'
import { authLogout } from '../../redux/actions/auth'
import { updateProfile } from '../../redux/actions/profile'
import { getHistory } from '../../redux/actions/history'
import { ILUserDefault } from '../../assets'

function UserProfile(props) {
  const { users } = props.users
  const { history } = props.history

  const lengthHistory = history?.length
  // const { data } = props.profile;
  const hiddenFileInput = React.useRef(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [file, setFile] = useState('')
  const [date, setDate] = useState('')
  const [gender, setGender] = useState('Male')

  const handleClick = (event) => {
    setFile(hiddenFileInput.current.click())
  }


  useEffect(() => {
    console.log(props.auth)
    props.getUser(props.auth.token)
    props.getHistory(props.auth.token)
    users.map((user) => {
      setName(user.name)
      setEmail(user.email)
      setNumber(user.phone_number)
      setAddress(user.address)
      setFile(user.picture)
      setDate(user.birth)
    })
  }, [])

  const formData = (e) => {
    e.preventDefault()
    props.updateProfile(
      {
        name,
        email,
        address,
        number,
        date,
        file,
      },
      props.auth.token
    )
  }

  return (
    <div>
      <header className="px-32 hidden md:block">
        <Header
          type="secondary"
          home="text-gray-500"
          product="text-gray-500"
          cart="text-gray-500"
          history="text-gray-500"
        />
      </header>
      <header className='bg-yellow-400 p-3 md:hidden block'>
        <Header type='responsive' />
        </header>
      <main className="bg-bg-profile w-full h-full md:px-32 px-10 bg-cover md:space-y-0 space-y-5">
        <section className="md:py-20">
          <h3 className="text-white text-2xl font-bold tracking-wide mb-10 pt-10">
            User Profile
          </h3>
          <div className="flex md:flex-row md:space-x-10 flex-col">
            <div className="bg-yellow-900 rounded-xl mb-10 md:mb-0">
              <div className="bg-white rounded-t-xl px-10 py-12 pb-14 flex flex-col items-center justify-center space-y-4 ">
                <div className="relative flex flex-col w-28 h-28">
                  {users.map((user) => {
                    return user.picture !== null ? (
                      <img
                        className="w-28 h-28 rounded-full object-cover "
                        src={user.picture}
                        alt="profile pic"
                      />
                    ) : (
                      <img
                        src={ILUserDefault}
                        alt="user"
                        className="w-28 h-28 rounded-full object-cover "
                      />
                    )
                  })}
                  <button
                    onClick={handleClick}
                    className="absolute bottom-0 right-1 focus:outline-none"
                  >
                    <BsPencil
                      size={30}
                      color="#fff"
                      className="bg-yellow-900 rounded-full p-1"
                    />
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={(value) => setFile(value.target.files[0])}
                    style={{ display: 'none' }}
                  />
                  {users.map((user) => {
                    return (
                      <div>
                        <p className="font-bold text-xl text-center">
                          {user.name}
                        </p>
                        <p className="text-xs text-center">{user.email}</p>
                      </div>
                    )
                  })}
                </div>
                <p className="text-gray-500">
                  Has been ordered {lengthHistory} products
                </p>
              </div>
            </div>
            <div className='flex-1 justify-center'>
            {users.map((user) => {
              return (
                <FormProfile
                  title="Contact"
                  label1="Email address :"
                  value1={email}
                  onChange1={(value) => setEmail(value.target.value)}
                  label2="Delivery address : "
                  value2={address}
                  onChange2={(value) => setAddress(value.target.value)}
                  label4="Mobile number :"
                  value4={number}
                  onChange4={(value) => setNumber(value.target.value)}
                />
              )
            })}
            </div>
          </div>
        </section>
        <section className="flex md:flex-row flex-col pb-20">
          <div className="flex-1">
            {users.map((user) => {
              return (
                <FormProfile
                  title="Details"
                  label1="Display name :"
                  value1={name}
                  onChange1={(value) => setName(value.target.value)}
                  label2="First name :"
                  value2={user.name.split(' ')[0]}
                  label3="Last name :"
                  value3={user.name.split(' ')[1]}
                  label4="DD/MM/YY"
                  value4={date}
                  onChange4={(value) => setDate(value.target.value)}
                  date
                  isRadio
                />
              )
            })}
          </div>
          <div className="w-fourpersen flex flex-col md:ml-0 ml-24 items-center">
            <h3 className="text-white font-bold text-xl w-60 text-center mb-4">
              Do you want to save the change ?
            </h3>
            <div className="w-72 space-y-3">
              <Button type="brown" text="Save Change" onClick={formData} />
              <Button type="main" text="Cancel" />
            </div>
            <div className="w-72 space-y-3 flex flex-col mt-3">
              <button className="bg-gray-300 text-lg font-bold text-yellow-900 px-5 py-3 rounded-lg flex flex-row justify-between items-center">
                <p>Edit Password</p>
                <MdKeyboardArrowRight size={28} />
              </button>
              <button
                onClick={props.authLogout}
                className="bg-gray-300 text-lg font-bold text-yellow-900 px-5 py-3 rounded-lg flex flex-row justify-between items-center"
              >
                <p>Log out</p>
                <MdKeyboardArrowRight size={28} />
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-32 py-14 hidden md:block">
        <Footer />
      </footer>
    </div>
  )
}
const mapStateToProps = (state) => ({
  users: state.users,
  auth: state.auth,
  profile: state.profile,
  history: state.history,
})

const mapDisPatchToProps = { getUser, authLogout, updateProfile, getHistory }
export default connect(mapStateToProps, mapDisPatchToProps)(UserProfile)
