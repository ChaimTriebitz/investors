import { useState } from 'react';
import { InvesterDetails } from '../views/investor-details';

export const InvestorsPreview = ({ speaker }) => {
	const [isModal, setisModal] = useState(false);

	const onToggleDetails = () => {
		setisModal(!isModal);
	};
	const investerStyle = {
		backgroundImage: `${speaker.speaker_head_shot_to_display}`,
	};
	
	return (
		<article className="investors-preview-artical" onClick={onToggleDetails}>
			{isModal && (
				<InvesterDetails
					onToggleDetails={onToggleDetails}
					speaker={speaker}
				/>
			)}
			<div style={investerStyle} className="investors-image">
				<img src={speaker.speaker_head_shot_to_display} alt="" />
			</div>
			<h4>
				{speaker.firstname} {speaker.lastname}
			</h4>
			<h5>{speaker.company}</h5>
		</article>
	);
};

