import { Button, FilterBox } from './Filter.styled.jsx'

export function Filter({
	All,
	Major,
	Wands,
	Cups,
	Swords,
	Pentacles,
	cartFiltration,
	shopFiltration
}) {
	return (
		<FilterBox>
			<Button type='button' onClick={All}>
				All
			</Button>

			<Button type='button' onClick={Major}>
				Major
			</Button>

			<Button type='button' onClick={Wands}>
				Wands
			</Button>
			<Button type='button' onClick={Cups}>
				Cups
			</Button>
			<Button type='button' onClick={Swords}>
				Swords
			</Button>

			<Button type='button' onClick={Pentacles}>
				Pentacles
			</Button>
			<Button type='button' onClick={shopFiltration}>
				Shop
			</Button>
			<Button type='button' onClick={cartFiltration}>
				Cart
			</Button>
		</FilterBox>
	)
}
