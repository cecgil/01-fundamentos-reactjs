import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/cecgil.png',
      name: 'Carlos Gil',
      role: 'Programador'
    },
    content: [
      {type: 'paragraph', content: 'AAAAAAAA'},
      {type: 'paragraph', content: 'BBBBBB'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/cecgil.png',
      name: 'Charlinho Gil',
      role: 'Programador'
    },
    content: [
      {type: 'paragraph', content: 'AAAAAAAA'},
      {type: 'paragraph', content: 'BBBBBB'},
    ],
    publishedAt: new Date('2023-05-13 20:00:00'),
  },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author= {post.author}
                content= {post.content}
                publishedAt= {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

