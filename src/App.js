import { useEffect, useState } from 'react';

// import axios from 'axios';
import axios from 'axios';
import { Container } from '@material-ui/core';

import classes from './App.module.css';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

function App() {
	const [word, setWord] = useState('');
	const [meanings, setMeanings] = useState([]);
	const [language, setLanguage] = useState('en');

	const dictionaryApi = async () => {
		try {
			const data = await axios.get(
				`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
			);
			console.log(data);
			setMeanings(data.data);
		} catch (err) {
			console.log(err);
		}
	};

	console.log(meanings);

	useEffect(() => {
		dictionaryApi();
	}, [word, language]);

	return (
		<div className={classes.App}>
			<Container maxWidth="md" className={classes.Container}>
				<Header
					lang={language}
					setLang={setLanguage}
					word={word}
					setWord={setWord}
				/>
				{meanings && (
					<Definitions word={word} meanings={meanings} language={language} />
				)}
			</Container>
		</div>
	);
}

export default App;
