import { memo, useCallback, useState } from 'react'

interface Task {
  id: number
  range: number
  name: string
}

const TaskItem = memo(function TaskItem({
  task,
  onChange
}: {
  task: Task
  onChange: (task: Task) => void
}) {
  console.log(`TaskItem ${task.id} re-rendered`)

  return (
    <div key={task.id} className='p-2 flex flex-row'>
      <div className='flex-1 pr-4'>
        <input
          type='text'
          className='input input-bordered w-full'
          value={task.name}
          onChange={(e) => {
            onChange({ ...task, name: e.target.value })
          }}
        />
      </div>
      <div className='flex justify-center'>
        <input
          type='range'
          value={task.range}
          min={0}
          max={10}
          onChange={(e) => {
            onChange({ ...task, range: parseInt(e.target.value) })
          }}
        />
      </div>
    </div>
  )
})

export const UseStateTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
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
    }
  ])

  const handleChange = useCallback(
    (updatedTask: Task) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === updatedTask.id) {
            return { ...updatedTask }
          }

          return task
        })
      )
    },
    [setTasks]
  )

  return (
    <div>
      <div className='grid gap-2'>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={`task-${task.id}`}
              task={task}
              onChange={handleChange}
            />
          )
        })}
      </div>
    </div>
  )
}
