import './App.css'
import { SignalsTasks } from './signals-tasks'
import { UseStateTasks } from './use-state-tasks'

function App() {
  return (
    <div className='h-screen w-full flex flex-row'>
      <div className='flex-1 p-4'>
        <h2 className='text-2xl text-center mb-4'>useState</h2>
        <UseStateTasks />
      </div>
      <div className='flex-1 p-4'>
        <h2 className='text-2xl text-center'>signals</h2>
        <SignalsTasks />
      </div>
    </div>
  )
}

export default App
