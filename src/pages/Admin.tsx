import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../components/Button'
import { POST_CATEGORIES } from '../data/content'
import type { Post, Testimonial } from '../data/content'
import { signOut, useAuth } from '../lib/auth'
import { postsStore, testimonialsStore } from '../lib/stores'

type Tab = 'posts' | 'testimonials'
type Field = { name: string; label: string; type?: 'text' | 'textarea' | 'url' | 'select' | 'checkbox'; options?: string[]; required?: boolean }
type Row = Record<string, unknown> & { id: string }

const POST_FIELDS: Field[] = [
  { name: 'title', label: 'Title', required: true },
  { name: 'excerpt', label: 'Summary', type: 'textarea', required: true },
  { name: 'category', label: 'Category', type: 'select', options: POST_CATEGORIES.filter((item) => item !== 'All') },
  { name: 'date', label: 'Date (e.g. March 2026)' },
  { name: 'source', label: 'Source (e.g. Thanh Niên)' },
  { name: 'href', label: 'Article link', type: 'url' },
  { name: 'image', label: 'Cover image URL', type: 'url' },
  { name: 'featured', label: 'Featured', type: 'checkbox' },
]

const TESTIMONIAL_FIELDS: Field[] = [
  { name: 'quote', label: 'Quote', type: 'textarea', required: true },
  { name: 'name', label: 'Name', required: true },
  { name: 'role', label: 'Role, organisation', required: true },
  { name: 'solution', label: 'Solution (e.g. AquaGuard)' },
  { name: 'avatar', label: 'Photo URL', type: 'url' },
]

const newId = (label: string) =>
  `${label.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'item'}-${Math.random().toString(36).slice(2, 7)}`

function Editor({ fields, value, onSave, onCancel }: { fields: Field[]; value: Row; onSave: (row: Row) => Promise<string | null>; onCancel: () => void }) {
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const next: Row = { ...value }
    for (const field of fields) {
      if (field.type === 'checkbox') next[field.name] = form.get(field.name) === 'on'
      else {
        const text = String(form.get(field.name) ?? '').trim()
        next[field.name] = text === '' && !field.required ? null : text
      }
    }
    setBusy(true)
    const result = await onSave(next)
    setBusy(false)
    if (result) setError(result)
  }

  return (
    <form className="card admin__form" onSubmit={submit}>
      {fields.map((field) => (
        <label key={field.name} className={`field${field.type === 'checkbox' ? ' field--check' : ''}`}>
          <span className="label">{field.label}</span>
          {field.type === 'textarea' ? (
            <textarea name={field.name} rows={4} required={field.required} defaultValue={String(value[field.name] ?? '')} />
          ) : field.type === 'select' ? (
            <select name={field.name} defaultValue={String(value[field.name] ?? field.options?.[0])}>
              {field.options?.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          ) : field.type === 'checkbox' ? (
            <input name={field.name} type="checkbox" defaultChecked={Boolean(value[field.name])} />
          ) : (
            <input name={field.name} type={field.type === 'url' ? 'url' : 'text'} required={field.required} defaultValue={String(value[field.name] ?? '')} />
          )}
        </label>
      ))}
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <div className="admin__actions">
        <Button type="submit">
          {busy ? 'Saving…' : 'Save'}
        </Button>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  )
}

export function Admin() {
  const { member, ready } = useAuth()
  const [tab, setTab] = useState<Tab>('posts')
  const [editing, setEditing] = useState<Row | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const posts = postsStore.useItems()
  const testimonials = testimonialsStore.useItems()

  useEffect(() => {
    if (ready && !member) window.location.hash = '#/login'
  }, [ready, member])
  if (!ready || !member) return null

  const isPosts = tab === 'posts'
  const store = (isPosts ? postsStore : testimonialsStore) as unknown as { save: (row: Row) => Promise<string | null>; remove: (id: string) => Promise<string | null>; importSeed: () => Promise<string | null>; isSeeded: () => boolean }
  const rows = (isPosts ? posts : testimonials) as unknown as Row[]
  const fields = isPosts ? POST_FIELDS : TESTIMONIAL_FIELDS
  const titleOf = (row: Row) => String(isPosts ? (row as unknown as Post).title : (row as unknown as Testimonial).name)

  const blank = (): Row => (isPosts ? { id: newId('post'), category: 'Awards' } : { id: newId('quote') })

  const save = async (row: Row) => {
    const error = await store.save(row)
    if (!error) {
      setEditing(null)
      setMessage('Saved.')
    }
    return error
  }

  const remove = async (row: Row) => {
    if (!window.confirm(`Delete "${titleOf(row)}"?`)) return
    setMessage((await store.remove(row.id)) ?? 'Deleted.')
  }

  const switchTab = (next: Tab) => {
    setTab(next)
    setEditing(null)
    setMessage(null)
  }

  return (
    <section className="section page" aria-labelledby="admin-title">
      <div className="container admin">
        <header className="admin__head">
          <div>
            <p className="eyebrow">Members</p>
            <h1 id="admin-title" className="h2-serif">
              Manage <span className="em">content.</span>
            </h1>
            <p className="label">Signed in as {member.email}</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => void signOut().then(() => (window.location.hash = '#/login'))}>
            Sign out
          </Button>
        </header>

        <div className="filters filters--left" role="tablist">
          {(['posts', 'testimonials'] as const).map((item) => (
            <button key={item} type="button" role="tab" aria-selected={item === tab} className={`chip${item === tab ? ' is-active' : ''}`} onClick={() => switchTab(item)}>
              {item === 'posts' ? 'News posts' : 'Testimonials'}
            </button>
          ))}
        </div>

        {message && (
          <p className="notice" role="status">
            {message}
          </p>
        )}

        {editing ? (
          <Editor key={editing.id} fields={fields} value={editing} onSave={save} onCancel={() => setEditing(null)} />
        ) : (
          <>
            <div className="admin__actions">
              <Button size="sm" onClick={() => setEditing(blank())}>
                {isPosts ? 'New post' : 'New testimonial'}
              </Button>
              {store.isSeeded() && (
                <Button variant="outline" size="sm" onClick={() => void store.importSeed().then((error) => setMessage(error ?? 'Starter content saved. You can now edit it.'))}>
                  Save starter content
                </Button>
              )}
            </div>
            <ul className="admin__list">
              {rows.map((row) => (
                <li key={row.id} className="card admin__row">
                  <div>
                    <strong>{titleOf(row)}</strong>
                    <span className="label">{isPosts ? String((row as unknown as Post).category) : String((row as unknown as Testimonial).role)}</span>
                  </div>
                  <div className="admin__actions">
                    <Button variant="outline" size="sm" onClick={() => setEditing(row)}>
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => void remove(row)}>
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
              {rows.length === 0 && <li className="body-l">Nothing yet. Add the first one.</li>}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
