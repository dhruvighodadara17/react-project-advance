import React from 'react'
import { useFetch } from '../../app/useFetch'

const CustomHooksExample: React.FC = () => {
  const { data, loading, error } = useFetch<{ title: string; body: string }[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
  )

  if (loading) return <p>Loading data... ⏳</p>
  if (error) return <p style={{ color: 'red' }}>❌ Error: {error}</p>

  return (
    <div>
      <h2>🛠️ Custom Hook Example - `useFetch`</h2>
      <ul>
        {data?.map((post) => (
          <li key={post.title}>
            <strong>{post.title}</strong> - {post.body}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CustomHooksExample
