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
    width: "100%",
    overflow: "hidden",
    flexDirection: 'column' as const,
    alignItems: 'center',
    minHeight: '100vh',
    padding: '3rem',
    gap: '2rem'
  }
}

export default App