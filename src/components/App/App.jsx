import { Component } from 'react'
import Section from '../Section/Section'
import './index.css'
//? Taro
import shop from '../../json/shop.json'
import taro from '../../json/taro.json'
import { Filter } from '../Filter/Filter.jsx'
import Shop from '../Shop/Shop.jsx'
import TaroList from '../TaroList/TaroList.jsx'

export class App extends Component {
	state = {
		taroSuit: taro,
		bgColor: 'white',
		isShop: false
	}
	allFiltration = () => {
		console.log('all')

		this.setState({
			taroSuit: taro,
			isShop: false
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
			activeButton: 'cartButton',
			bgColor: '#ff991c91'
		})
	}
	cartFiltration = () => {
		console.log('Cart')
		// console.log('Selected Models: ', selectedModels);

		this.setState({
			// aircraftsArray: selectedModels,
			aircraftTitle: 'Cart',
			activeButton: 'cartButton',
			bgColor: '#ff991c91'
		})
	}
	render() {
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
				<Section title={this.state.isShop ? 'Shop' : 'Tarot Cards Collection'}>
					{this.state.isShop ? (
						<Shop items={this.state.taroSuit} />
					) : (
						<TaroList items={this.state.taroSuit} />
					)}
				</Section>
			</>
		)
	}
}
