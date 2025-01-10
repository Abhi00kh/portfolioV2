import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-gray-900 bg-opacity-80 fixed top-0 left-0 w-full z-50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-green-500 font-bold text-2xl tracking-wide">
            {`<`} <span className="text-green-500">ABHIJIT KHULE</span> {`/>`}
          </div>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-blue-900 text-white' : 'text-gray-300 hover:bg-blue-600 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium uppercase'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="sm:hidden flex items-center">
          <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-blue-900 text-white' : 'text-gray-300 hover:bg-blue-600 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium uppercase'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}