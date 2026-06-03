import { Component } from 'react'
import Section from '../Section/Section'
import './index.css'
//? Taro
import shop from '../../json/shop.json'
import taro from '../../json/taro.json'
import { Filter } from '../Filter/Filter.jsx'
import Shop from '../Shop/Shop.jsx'
import { ShopItemText } from '../Shop/Shop.styled.jsx'
import TaroList from '../TaroList/TaroList.jsx'

export class App extends Component {
	state = {
		taroSuit: taro,
		bgColor: 'white',
		isShop: false,
		currentView: 'taro',
		cartItems: []
	}
	allFiltration = () => {
		console.log('all')

		this.setState({
			taroSuit: taro,
			isShop: false,
			currentView: 'taro'
		})
		console.log('taro', taro)
	}

	majorFiltration = () => {
		const suiteCard = taro.filter(item => item.suite === 'major')
		this.setState({
			taroSuit: suiteCard,
			isShop: false
		})
	}
	wandsFiltration = () => {
		const suiteCard = taro.filter(item => item.suite === 'Wands')
		this.setState({
			taroSuit: suiteCard,
			isShop: false
		})
	}
	cupsFiltration = () => {
		const suiteCard = taro.filter(item => item.suite === 'Cups')
		this.setState({
			taroSuit: suiteCard,
			isShop: false
		})
	}
	swordsFiltration = () => {
		const suiteCard = taro.filter(item => item.suite === 'Swords')
		this.setState({
			taroSuit: suiteCard,
			isShop: false
		})
	}
	pentaclesFiltration = () => {
		const suiteCard = taro.filter(item => item.suite === 'Pentacles')
		this.setState({
			taroSuit: suiteCard,
			isShop: false
		})
	}
	shopFiltration = () => {
		console.log('Shop')

		const shopProducts = shop.shop.products
		this.setState({
			taroSuit: shopProducts,
			isShop: true,
			currentView: 'shop',
			activeButton: 'cartButton',
			bgColor: '#ff991c91'
		})
	}

	toggleCartItem = selectedItem => {
		this.setState(prevState => {
			const isAlreadyInCart = prevState.cartItems.some(
				item => item.id === selectedItem.id
			)
			return {
				cartItems: isAlreadyInCart
					? prevState.cartItems.filter(item => item.id !== selectedItem.id)
					: [...prevState.cartItems, selectedItem]
			}
		})
	}

	cartFiltration = () => {
		console.log('Cart')
		this.setState({
			isShop: false,
			currentView: 'cart',
			aircraftTitle: 'Cart',
			activeButton: 'cartButton',
			bgColor: '#ff991c91'
		})
	}

	render() {
		const { currentView, taroSuit, cartItems } = this.state
		const sectionTitle =
			currentView === 'shop'
				? 'Shop'
				: currentView === 'cart'
					? 'Cart'
					: 'Tarot Cards Collection'

		return (
			<>
				<Filter
					All={this.allFiltration}
					Major={this.majorFiltration}
					Wands={this.wandsFiltration}
					Cups={this.cupsFiltration}
					Swords={this.swordsFiltration}
					Pentacles={this.pentaclesFiltration}
					shopFiltration={this.shopFiltration}
					cartFiltration={this.cartFiltration}
				/>
				<Section title={sectionTitle}>
					{currentView === 'shop' ? (
						<Shop
							items={taroSuit}
							selectedItems={cartItems}
							onToggleCart={this.toggleCartItem}
						/>
					) : currentView === 'cart' ? (
						cartItems.length > 0 ? (
							<Shop
								items={cartItems}
								selectedItems={cartItems}
								onToggleCart={this.toggleCartItem}
							/>
						) : (
							<ShopItemText>Not added yet</ShopItemText>
						)
					) : (
						<TaroList items={taroSuit} />
					)}
				</Section>
			</>
		)
	}
}
