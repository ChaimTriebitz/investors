import { InvestorsPreview } from './investors-preview';

export function InvestorsList({ data }) {
	return (
		<div className="investers-list-container">
			<h1>MEET OUR {data.speakers.length} FEATURED INVESTORS</h1>
			<div className="investers-list  simple-cards-grid">
				{data.speakers.map((speaker) => (
					<InvestorsPreview key={speaker.id} speaker={speaker} />
				))}
			</div>
		</div>
	);
}

