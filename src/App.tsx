import { FC } from 'react'
import { InputField, CountryList } from './components'

const App: FC = () => {
  return (
    <div style={styles.mainContainer}>
      <InputField />
      <CountryList />
    </div>
  )
}

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '3rem',
    gap: '2rem'
  }
}

export default App