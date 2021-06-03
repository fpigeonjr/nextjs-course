import { Route, Switch } from 'react-router-dom'
import AllMeetupsPage from './pages/allMeetups'
import NewMeetupPage from './pages/newMeetup'
import FavoritesPage from './pages/favorites'
import MainNavigation from './components/layout/mainNavigation'

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
