import { Component } from 'react'
import type { ReactNode } from 'react'
import { StateScreen } from '../components/StateScreen'

type Props = { children: ReactNode }
type State = { failed: boolean }

/** Catches a crash in one page so the nav and footer stay usable; give it a `key` per route so navigating clears it. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false }

  static getDerivedStateFromError(): State {
    return { failed: true }
  }

  render() {
    if (this.state.failed) {
      return (
        <StateScreen
          kind="error"
          label="Something broke"
          title="That didn’t go to plan."
          text="An unexpected error stopped this page from loading. Reloading usually fixes it. If it keeps happening, let us know."
          actions={
            <>
              <button type="button" className="btn btn--primary" onClick={() => window.location.reload()}>
                Reload page
              </button>
              <a className="btn btn--outline" href="#/contact">
                Contact us
              </a>
            </>
          }
        />
      )
    }
    return this.props.children
  }
}
