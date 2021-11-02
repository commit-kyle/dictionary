import React from 'react';
import classes from './Definitions.module.css';

const Definitions = props => {
	const noWord = 'Start by searching for a word';

	return (
		<div className={classes.Meanings}>
			{props.meanings[0] && props.word && props.language === 'en' && (
				<audio
					src={
						props.meanings[0].phonetics[0] &&
						props.meanings[0].phonetics[0].audio
					}
					className={classes.Audio}
					controls
				>
					Your browser does not support audio
				</audio>
			)}

			{props.word === '' ? (
				<span className={classes.SubTitle}>{noWord}</span>
			) : (
				props.meanings.map(meaning =>
					meaning.meanings.map(item =>
						item.definitions.map(def => {
							return (
								<div className={classes.SingleMeaning}>
									<span className={classes.Define}>
										<p>Definition: </p>
										{def.definition}
									</span>
									{def.example && (
										<span className={classes.Define}>
											<p>Example: </p> {def.example}
										</span>
									)}
									{def.synonyms.length > 0 && (
										<span className={classes.Define}>
											<p>Synonyms: </p>
											{def.synonyms.map(s => `${s}, `)}
										</span>
									)}
								</div>
							);
						})
					)
				)
			)}
		</div>
	);
};

export default Definitions;
