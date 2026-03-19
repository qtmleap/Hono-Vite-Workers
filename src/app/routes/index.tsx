import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-white dark:bg-black'>
      <h1 className='text-4xl font-bold text-zinc-900 dark:text-white'>
        Hono Vite Workers
      </h1>
    </div>
  )
}
