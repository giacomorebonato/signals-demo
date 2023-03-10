import { $ } from 'valtio-signal'
import { proxy } from 'valtio/vanilla'

interface Task {
  id: number
  range: number
  name: string
}

const tasks = proxy([
  {
    id: 1,
    range: 3,
    name: 'Tennis'
  },
  {
    id: 2,
    range: 4,
    name: 'Hiking'
  },
  {
    id: 3,
    range: 6,
    name: 'Snorkeling'
  },
  {
    id: 4,
    range: 6,
    name: 'Kite Surfing'
  }
])

const handleChange = (updatedTask: Task) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const taskToUpdate = tasks.find((t) => t.id === updatedTask.id)!

  Object.assign(taskToUpdate, updatedTask)
}

const TaskItem = ({ task }: { task: Task }) => {
  console.log(`TaskItem ${task.id} re-rendered`)

  return (
    <div key={task.id} className='p-2 flex flex-row'>
      <div className='flex-1 pr-4'>
        <input
          type='text'
          className='input input-bordered w-full'
          value={$(task).name}
          onChange={(e) => {
            handleChange({ ...task, name: e.target.value })
          }}
        />
      </div>
      <div className='flex justify-center'>
        <input
          type='range'
          value={$(task).range}
          min={0}
          max={10}
          onChange={(e) => {
            handleChange({ ...task, range: parseInt(e.target.value) })
          }}
        />
      </div>
    </div>
  )
}

export const SignalsTasks = () => {
  return (
    <div>
      <div className='grid gap-2'>
        {tasks.map((task) => {
          return <TaskItem key={task.id} task={task} />
        })}
      </div>
    </div>
  )
}
