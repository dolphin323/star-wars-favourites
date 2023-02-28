# Star Wars Favorites Mobile Application ✨

## Description 📱

Mobile application based on React Native for iOS & Android platforms that gives the ability to indicate the total amount of male/female/other favorite characters across the Star Wars Universe.

## How to start the app

1. Run `yarn install` at the root folder
2. Start Metro: `yarn start`
3. Start the app:`yarn android` or `yarn ios`

## Managing locales

We're currently using [i18next](https://www.i18next.com/) with [react-i18next](https://react.i18next.com/).

Changing language is easy:

```
import { locale } from 'src/utils/locale';

const languageHandler = (lang) => {
    locale.changeLanguage(lang);
}
```

Locale config can be found in `src/utils/locale/`. Language files are located at `src/assets/locale/`.

## Statements

- Make an API Request to get the information from the server.
- Display the list of retrieved elements.
- By clicking on any element of this list - extra information should be displayed on the dedicated screen.
- By clicking on the “Add to favorites” link/icon against any character - recalculate the total votes and indicate the selected element as the liked one.
- Display total amounts of male/female/other characters based on user's selection.
- The “Reset” button should flush all previously added to the favorites list personages and make all total values equal to zero.
