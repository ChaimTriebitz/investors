import { useState } from 'react';

export const InvesterDetails = ({ onToggleDetails, speaker }) => {
	const [isReadMore, setIsReadMore] = useState(false);
	const onReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	const investerStyle = {
		backgroundImage: `${speaker.speaker_head_shot_to_display}`,
	};
	return (
		<section className="modal-overlay details-section">
			<div
				className="modal-container"
				onClick={(ev) => ev.stopPropagation()}
			>
				<h4>
					{speaker.firstname} {speaker.lastname}
				</h4>

				<h5>{speaker.company}</h5>

				<div style={investerStyle} className="investors-image">
					<img src={speaker.speaker_head_shot_to_display} alt="" />
				</div>

				<div className="investor-bio">
					<p>{speaker.bio.substring(1, 200)}</p>
					{isReadMore && <p>{speaker.bio.substring(201)}</p>}
					<button onClick={onReadMore}>
						{isReadMore ? 'Less' : '...More'}
					</button>
				</div>

				<button className='close-modal' onClick={onToggleDetails}>CLOSE</button>
			</div>
		</section>
	);
};
