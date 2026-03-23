import { Component } from 'react'
import Section from '../Section/Section'
import './index.css'
//? Taro
import taro from '../../json/taro.json'
import { Filter } from '../Filter/Filter.jsx'
import TaroList from '../TaroList/TaroList.jsx'

export class App extends Component {
	state = {
		taroSuit: taro,
		bgColor: 'white'
	}
	allFiltration = () => {
		console.log('all')

		this.setState({
			taroSuit: taro
		})
		console.log('taro', taro)
	}

	majorFiltration = () => {
		const suiteCard = taro.filter(item => item.suite === 'major')
		this.setState({
			taroSuit: suiteCard
		})
	}
	wandsFiltration = () => {
		const suiteCard = taro.filter(item => item.suite === 'Wands')
		this.setState({
			taroSuit: suiteCard
		})
	}
	cupsFiltration = () => {
		const suiteCard = taro.filter(item => item.suite === 'Cups')
		this.setState({
			taroSuit: suiteCard
		})
	}
	swordsFiltration = () => {
		const suiteCard = taro.filter(item => item.suite === 'Swords')
		this.setState({
			taroSuit: suiteCard
		})
	}
	pentaclesFiltration = () => {
		const suiteCard = taro.filter(item => item.suite === 'Pentacles')
		this.setState({
			taroSuit: suiteCard
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
				/>
				<Section title='Колекція карт Таро'>
					<TaroList items={this.state.taroSuit} />
				</Section>
			</>
		)
	}
}
