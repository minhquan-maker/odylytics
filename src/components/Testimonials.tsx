import { TESTIMONIALS } from '../data/content'
import type { Testimonial } from '../data/content'
import { testimonialsStore } from '../lib/stores'

function Quote({ item }: { item: Testimonial }) {
  return (
    <figure className="quote" data-reveal>
      <blockquote>“{item.quote}”</blockquote>
      <figcaption>
        <span className="avatar" aria-hidden="true">
          {item.avatar ? <img src={item.avatar} alt="" /> : item.name.charAt(0)}
        </span>
        <span>
          <span className="quote__name">{item.name}</span>
          <span className="quote__role">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

/** Testimonials are editable by members; with no database they fall back to the seed copy. */
export function Testimonials({ limit }: { limit?: number }) {
  const stored = testimonialsStore.useItems()
  const items = testimonialsStore.isSeeded() ? TESTIMONIALS : stored
  return (
    <div className="quotes">
      {items.slice(0, limit).map((item) => (
        <Quote key={item.id} item={item} />
      ))}
    </div>
  )
}
