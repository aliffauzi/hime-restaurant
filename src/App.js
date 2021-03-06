import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FoodState from './Context/Food/FoodState'
import CheckOutState from './Context/Checkout/CheckOutState'
import UserState from './Context/User/userState'

import Home from './Components/Pages/Home'
import SideNav from './Components/Layouts/SideNav'
import History from './Components/Pages/History'
import CheckoutModal from './Components/Layouts/Modal'
import FoodModal from './Components/Layouts/FoodModal'
import LoginModal from './Components/Layouts/LoginModal'
import HistoryState from './Context/History/HistoryState'
import SearchState from './Context/Search/SearchState'

const App = () => {
	return (
		<UserState>
			<CheckOutState>
				<SearchState>
					<FoodState>
						<HistoryState>
							<Router>
								<Layout style={{ minHeight: '100vh' }}>
									<SideNav />
									<CheckoutModal />
									<FoodModal />
									<LoginModal />
									<Switch>
										<Route exact path='/' component={Home} />
										<Route path='/history' component={History} />
									</Switch>
								</Layout>
							</Router>
						</HistoryState>
					</FoodState>
				</SearchState>
			</CheckOutState>
		</UserState>
	)
}

export default App
