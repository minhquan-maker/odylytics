import { useState } from 'react'
import { PostCard } from '../components/PostCard'
import { PageHead } from '../components/Section'
import { POSTS, POST_CATEGORIES } from '../data/content'
import type { PostCategory } from '../data/content'
import { postsStore } from '../lib/stores'

export function Blog() {
  const stored = postsStore.useItems()
  const all = postsStore.isSeeded() ? POSTS : stored
  const [category, setCategory] = useState<'All' | PostCategory>('All')
  const posts = all.filter((post) => category === 'All' || post.category === category)
  const [first, ...rest] = posts

  return (
    <>
      <PageHead label="Blog" title="Wins, press and milestones." lead="Competition results, media coverage and updates from the team." />
      <section className="section section--tight">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter by category">
            {POST_CATEGORIES.map((item) => (
              <button key={item} type="button" className={`chip${item === category ? ' is-active' : ''}`} aria-pressed={item === category} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
          {first ? (
            <>
              <PostCard key={`${category}-${first.id}`} post={first} large />
              <div className="post-grid">
                {rest.map((post) => (
                  <PostCard key={`${category}-${post.id}`} post={post} />
                ))}
              </div>
            </>
          ) : (
            <p className="muted">Nothing here yet.</p>
          )}
        </div>
      </section>
    </>
  )
}
