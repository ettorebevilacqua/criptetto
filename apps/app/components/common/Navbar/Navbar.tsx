"use client"

import { FC, useContext } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Container } from '@components/ui'
import Logo from '../logo'
import Searchbar from '../Searchbar'
import { RootContext } from 'context/app.context'
// import { Searchbar, UserNav } from '@components/common'

interface Link {
  href: string
  label: string
}

interface NavbarProps { }

const Navbar: FC<NavbarProps> = ({ }) => {
  const appPages = useContext(RootContext)
  const navBarlinks = /* categories ||*/appPages.pages.slice(0, 2).map((c) => ({
    label: c?.name || '',
    href: `${c.url || '/'}`,
  }))
  return <NavbarRoot>
    <Container clean className="mx-auto max-w-8xl px-6">
      <div className={s.nav}>
        <div className="flex items-center flex-1">
          <Link href="/" className={s.logo} aria-label="Logo">
            <Logo />
          </Link>
          <nav className={s.navMenu}>
            <Link href="/search" className={s.link}>
              All
            </Link>
            {navBarlinks?.map((l) => (
              <Link href={l.href} key={l.href} className={s.link}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="justify-center flex-1 hidden lg:flex">
          </div>
        )}
        { /* <div className="flex items-center justify-end flex-1 space-x-8">
          <UserNav />
        </div> */}
      </div>
      {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div>
      )}
    </Container>
  </NavbarRoot>
}

export default Navbar
