
import Search from './components/Search'
import Forecast from './components/Forecast'
import useForecast from './hooks/useForecast'

const App = (): JSX.Element => {
  const {
    term, options, forecast, onInputChange, onOptionSelect, onSubmit
  }=useForecast()


  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-yellow-400 via-blue-400 to-red-400 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
      ):(
      <Search term={term} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit}/>
      )}
      </main>
  )
}

export default App
