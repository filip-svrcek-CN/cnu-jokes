# CNU Jokes

React App that displays terrible Chuck Norris jokes from an open CN jokes API https://api.chucknorris.io/

## Features

- Display a random joke on landing
- Display any number of jokes available
- Display all available categories
  - When selecting a category, new random jokes will be displayed from that category
  - User can select the amount of jokes that is displayed
- Full-text search of jokes displaying first 25 jokes (or less if not available)
- Count input with real-time update on number of the jokes
- Displays unique jokes only
- Notification when failing to fetch another unique joke (limited amount of iterations to find the next unique joke)
- "New random jokes!" button shows random jokes according to the Counter and Category
- …mobile scaling

### How to run the dev:

- yarn install
- yarn dev
