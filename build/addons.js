import delegate from '../src/addons/delegate.ts'
import singleton from '../src/addons/singleton.ts'

tippy.delegate = delegate
tippy.singleton = singleton

export { delegate, singleton }
