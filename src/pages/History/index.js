/* eslint-disable*/

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Footer, Header, ItemHistory } from '../../components'
import { authLogout } from '../../redux/actions/auth'
import { getDetailHistory, getHistory } from '../../redux/actions/history'

function History(props) {
	const { history } = props.history


	useEffect(() => {
		props.getHistory(props.auth.token)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<div>
				<header className="hidden md:block px-32">
					<Header
						type="secondary"
						home="text-gray-500"
						product="text-gray-500"
						cart="text-gray-500"
						history="text-yellow-900 font-bold"
					/>
				</header>
        <header className='bg-yellow-400 p-3 md:hidden block'>
        <Header type='responsive' />
        </header>
				<main className="bg-bg-history w-full md:h-full h-screen bg-cover bg-center md:px-32 py-20 flex flex-col ">
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
					<div className="grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-5 md:px-32 px-16 ">
						{history?.map((item) => {
							const total = item.total + item.tax + item.shipping_cost
							return (
								<ItemHistory
									to={`/history/${item.id}`}
									code={item.code}
									total={total.toLocaleString('en')}
									payment={item.payment_method}
								/>
							)
						})}
					</div>
				</main>
				<footer className="px-32 py-20 hidden md:block ">
					<Footer />
				</footer>
			</div>
		</>
	)
}

const mapStateToProps = (state) => ({
	users: state.users,
	auth: state.auth,
	history: state.history,
})

const mapDispatchToProps = { authLogout, getHistory, getDetailHistory }

export default connect(mapStateToProps, mapDispatchToProps)(History)
