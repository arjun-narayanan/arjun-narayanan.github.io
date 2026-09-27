import { useId, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import './FocusboardDemo.css'

type Task = { id: number; title: string; category: string; complete: boolean }
type Filter = 'All' | 'Active' | 'Done'
type DemoState = { tasks: Task[]; status: string }

const storageKey = 'focusboard-tasks'
const starterTasks: Task[] = [
  { id: 1, title: 'Plan this week', category: 'Personal', complete: true },
  { id: 2, title: 'Finish project outline', category: 'Work', complete: false },
  { id: 3, title: 'Call the design team', category: 'Work', complete: false },
]

function isTask(value: unknown): value is Task {
  if (!value || typeof value !== 'object') return false
  const task = value as Record<string, unknown>
  return (
    typeof task.id === 'number' && Number.isSafeInteger(task.id) &&
    typeof task.title === 'string' && task.title.trim().length > 0 &&
    typeof task.category === 'string' && task.category.trim().length > 0 &&
    typeof task.complete === 'boolean'
  )
}

function readTasks(): DemoState {
  try {
    const saved = window.localStorage.getItem(storageKey)
    if (saved !== null) {
      const parsed: unknown = JSON.parse(saved)
      if (!Array.isArray(parsed) || !parsed.every(isTask) || new Set(parsed.map((task) => task.id)).size !== parsed.length) {
        throw new Error('Invalid saved tasks')
      }
      return { tasks: parsed, status: 'Your saved tasks are ready. Changes stay in this browser.' }
    }
    return { tasks: starterTasks, status: 'Try the sample tasks, or add your own. Changes save in this browser.' }
  } catch {
    return {
      tasks: starterTasks,
      status: 'Saved tasks could not be read. Sample tasks are shown; nothing has been overwritten.',
    }
  }
}

function FocusboardDemo() {
  const [{ tasks, status }, setState] = useState<DemoState>(readTasks)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Personal')
  const [filter, setFilter] = useState<Filter>('All')
  const inputId = useId()
  const categoryId = useId()
  const headingId = useId()
  const completed = tasks.filter((task) => task.complete).length
  const completion = tasks.length ? Math.round((completed / tasks.length) * 100) : 0
  const visibleTasks = useMemo(
    () => tasks.filter((task) => filter === 'All' || (filter === 'Done' ? task.complete : !task.complete)),
    [filter, tasks],
  )

  function updateTasks(nextTasks: Task[], message: string) {
    let nextStatus = `${message} Saved in this browser.`
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(nextTasks))
    } catch {
      nextStatus = `${message} Browser storage is unavailable; changes will last only while this demo remains open.`
    }
    setState({ tasks: nextTasks, status: nextStatus })
  }

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      setState({ tasks, status: 'Enter a task name before adding it.' })
      return
    }
    let id = Date.now()
    while (tasks.some((task) => task.id === id)) id += 1
    updateTasks([{ id, title: trimmedTitle, category, complete: false }, ...tasks], 'Task added.')
    setTitle('')
    setFilter('All')
  }

  function toggleTask(task: Task) {
    updateTasks(
      tasks.map((item) => item.id === task.id ? { ...item, complete: !item.complete } : item),
      task.complete ? 'Task marked active.' : 'Task completed. Nice work!',
    )
  }

  function removeTask(task: Task) {
    updateTasks(tasks.filter((item) => item.id !== task.id), 'Task removed.')
  }

  const emptyMessage = filter === 'Done'
    ? 'No completed tasks yet. Every small step counts.'
    : filter === 'Active'
      ? 'All caught up. Add something new when you are ready.'
      : 'A fresh start. Add your first task above.'

  return (
    <section className="focus-demo" aria-labelledby={headingId}>
      <header className="focus-demo-header">
        <div className="focus-demo-brand">
          <span className="focus-demo-mark" aria-hidden="true">f.</span>
          <div><h2 id={headingId}>Focusboard</h2><p>A little space to get things done.</p></div>
        </div>
        <span className="focus-demo-badge">Live demo</span>
      </header>

      <div className="focus-demo-overview">
        <div>
          <p className="focus-demo-eyebrow">ONE STEP AT A TIME</p>
          <h3>Make room for progress.</h3>
          <p>{completed} of {tasks.length} tasks complete <span aria-hidden="true">·</span> {tasks.length - completed} remaining</p>
        </div>
        <div className="focus-demo-progress-wrap">
          <span className="focus-demo-progress-label">{completion}% complete</span>
          <progress className="focus-demo-progress" max="100" value={completion} aria-label="Task completion" />
        </div>
      </div>

      <form className="focus-demo-form" onSubmit={addTask}>
        <div className="focus-demo-field focus-demo-title-field">
          <label htmlFor={inputId}>New task</label>
          <input id={inputId} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="What is your next small step?" maxLength={240} autoComplete="off" />
        </div>
        <div className="focus-demo-field">
          <label htmlFor={categoryId}>Category</label>
          <select id={categoryId} value={category} onChange={(event) => setCategory(event.target.value)}>
            <option>Personal</option><option>Work</option><option>Health</option>
          </select>
        </div>
        <button className="focus-demo-add" type="submit"><span aria-hidden="true">+</span> Add task</button>
      </form>

      <div className="focus-demo-list-heading">
        <h3>Your tasks <span>{tasks.length}</span></h3>
        <div className="focus-demo-filters" role="group" aria-label="Filter tasks">
          {(['All', 'Active', 'Done'] as const).map((item) => (
            <button key={item} className="focus-demo-filter" type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
      </div>

      <ul className="focus-demo-list">
        {visibleTasks.map((task) => (
          <li className={`focus-demo-task${task.complete ? ' focus-demo-task-complete' : ''}`} key={task.id}>
            <label className="focus-demo-task-label">
              <input type="checkbox" checked={task.complete} onChange={() => toggleTask(task)} aria-label={`Mark ${task.title} as ${task.complete ? 'active' : 'complete'}`} />
              <span className="focus-demo-checkbox" aria-hidden="true">{task.complete ? '✓' : ''}</span>
              <span className="focus-demo-task-title">{task.title}</span>
            </label>
            <span className="focus-demo-category">{task.category}</span>
            <button className="focus-demo-delete" type="button" aria-label={`Delete task: ${task.title}`} onClick={() => removeTask(task)}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 7h14M9 7V4h6v3m-9 0 1 13h10l1-13M10 11v5m4-5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </li>
        ))}
      </ul>
      {visibleTasks.length === 0 && <p className="focus-demo-empty">{emptyMessage}</p>}
      <p className="focus-demo-status" role="status" aria-live="polite" aria-atomic="true">{status}</p>
    </section>
  )
}

export default FocusboardDemo
