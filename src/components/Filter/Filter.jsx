import {FilterBox, Button} from './Filter.styled.jsx'

export function Filter({ All, Major, Wands, Cups, Swords, Pentacles }) {
	return (
		<FilterBox>
			<Button type='button' onClick={All}>
				ВСІ
			</Button>

			<Button
				
				type='button'
				onClick={Major}
			>
				Major
			</Button>

			<Button
				
				type='button'
				onClick={Wands}
			>
				Wands
			</Button>
			<Button
				
				type='button'
				onClick={Cups}
			>
				Cups
			</Button>
			<Button
				
				type='button'
				onClick={Swords}
			>
				Swords
			</Button>

			<Button
				type='button'
				onClick={Pentacles}
			>
				Pentacles
			</Button>
		</FilterBox>
	)
}
