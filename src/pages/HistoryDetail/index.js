/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { ILFood4 } from '../../assets'
import { Button, Footer, Header, ItemCart, ItemHistory } from '../../components'
import { authLogout } from '../../redux/actions/auth'
import { getDetailHistory, getHistory, deleteHistory } from '../../redux/actions/history'
import Swal from 'sweetalert2'
function HistoryDetail(props) {
  const { slug } = useParams()
  const [setModal] = useState(false)
  const { history } = props.history
  const { results } = props.history?.details
  const { invoice } = props.history?.details
  const navigation = useHistory()

  const deleteHistory = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your history has been deleted.',
          'success'
        )
        props.deleteHistory(props.auth.token, slug)
        navigation.push('/history')
      }
    })
  }

  useEffect(() => {
    console.log('ini id', slug)
    props.getHistory(props.auth.token)
    props.getDetailHistory(props.auth.token, slug)
    console.log(invoice, results)

  }, [slug])

  const modalChecked = () => {
    setModal(true)
  }


  return (
    <div className="overflow-y-hidden relative">
      <div>
        <header className="hidden md:block px-32">
          <Header
            type="secondary"
            home="text-gray-500"
            product="text-gray-500"
            cart="text-gray-500"
            history="text-yellow-900 font-bold"
            onClick={props.authLogout}
          />
        </header>
        <main className="md:h-full h-screen bg-bg-history w-full bg-cover bg-center md:px-32 py-20 flex flex-col ">
          <section className="flex flex-col items-center">
            <h3 className="text-white text-2xl font-medium">
              Let’s see what you have bought!
            </h3>
            <h4 className="text-white text-sm">Select item to delete</h4>
          </section>
          <div className="my-10 ">
            <button className="text-white float-right focus:outline-none hover:underline md:px-32 px-16">
              Delete
            </button>
          </div>
          <div className="grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-5 md:px-32 px-16 gap-5 px-32">
            {history?.map((item) => {
              const total = item.total + item.tax + item.shipping_cost
              return (
                <ItemHistory
                  key={item.id}
                  onClick={modalChecked}
                  code={item.code}
                  total={total.toLocaleString('en')}
                  payment={item.payment_method}
                />
              )
            })}
          </div>
        </main>
        <footer className="hidden md:block px-32 py-20">
          <Footer />
        </footer>
      </div>
      <div className=" bg-black bg-opacity-70 absolute top-0 w-full h-full flex flex-col flex-1 justify-center items-center">
        <div className="bg-white rounded-xl py-8 px-8">
          <h4 className="text-yellow-800 text-2xl font-bold text-center">
            INVOICE
          </h4>
          <div className="border-b-2 border-gray-300 pb-2">
            {results?.map((item) => {
              return (
                <ItemCart
                  pic={ILFood4}
                  name={item.name}
                  quantity={item.amount}
                  price={item.price.toLocaleString('en')}
                  size={item.variants}
                />
              )
            })}
          </div>
          <div className="flex flex-row items-center justify-between mt-5">
            <div className="leading-relaxed flex-1 pr-10">
              <p>SUBTOTAL</p>
              <p>TAX & FEES</p>
              <p>SHIPPING</p>
              <p>PAYMENT METHOD</p>
              <p>ADDRESS</p>
            </div>
            <div className="leading-relaxed">
              {invoice?.map((res) => {
                return (
                  <div>
                    <p>IDR {res.total.toLocaleString('en')}</p>
                    <p>IDR {res.tax.toLocaleString('en')}</p>
                    <p>IDR {res.shipping_cost.toLocaleString('en')}</p>
                    <p className="uppercase"> {res.payment_method}</p>
                    <p className="uppercase"> {res.shipping_address}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-row justify-between text-yellow-900 font-bold text-2xl pt-5">
            <p>TOTAL</p>
            {invoice?.map((res) => {
              const total = res.total + res.tax + res.shipping_cost
              return <p>IDR {total.toLocaleString('en')}</p>
            })}
          </div>
          <div className="bg-white text-white font-bold rounded-xl px-20 mt-5 py-2 focus:outline-none tracking-widest">
            <Button onClick={deleteHistory} text='DELETE' />
          </div>
          <div className="flex flex-row justify-center ">
            <Link
              to={'/history'}
              className="bg-yellow-900 text-white font-bold rounded-xl px-10 py-2 focus:outline-none tracking-widest"
            >
              CLOSE
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.users,
  auth: state.auth,
  history: state.history,
})

const mapDispatchToProps = { authLogout, getHistory, getDetailHistory, deleteHistory }

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail)
