import {
	ThemeProvider,
	createTheme,
	TextField,
	MenuItem,
} from '@material-ui/core';
import languages from '../../components/Data/Languages/Languages';

import classes from './Header.module.css';

const Header = props => {
	const darkTheme = createTheme({
		palette: {
			primary: {
				main: '#fff',
			},
			type: 'dark',
		},
	});

  const handleChange = language => {
    props.setLang(language);
    props.setWord("");
  }

	return (
		<header className={classes.Header}>
			<h1 className={classes.Title}>{props.word ? props.word : 'Dictionary'}</h1>
			<div className={classes.Inputs}>
				<ThemeProvider theme={darkTheme}>
					<TextField
            className={classes.Search}
						id="standard-basic"
						label="Search a word"
						value={props.word}
						onChange={e => props.setWord(e.target.value)}
					/>
					<TextField
            className={classes.Select}
						select
						label="Language"
						value={props.lang}
						onChange={e => handleChange(e.target.value)}
					>
						{languages.map(language => (
							<MenuItem key={language.label} value={language.label}>
								{language.value}
							</MenuItem>
						))}
					</TextField>
				</ThemeProvider>
			</div>
		</header>
	);
};

export default Header;
