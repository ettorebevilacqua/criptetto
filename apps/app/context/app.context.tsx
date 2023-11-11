"use client";

import React, { Dispatch, createContext, useReducer } from "react";

import { reducerCount } from "./reducer/reducerCount";
import { Page, PageProps } from "types/types";


const _pages: Page[] = [
  { id: 'home1', name: 'home', url: '/', body: 'im body' },
  { id: 'grid1', name: 'grid', url: '/grid', body: 'body of candle' }
]
const _pageProps: PageProps = { pages: _pages, categories: [] }

export const RootContext = createContext<PageProps>(_pageProps);

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <RootContext.Provider value={_pageProps}>
      {children}
    </RootContext.Provider>
  )
}

/*
import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export function Sidebar() {
  const [isOpen, setIsOpen] = useState();

  return (
    <SidebarContext.Provider value={{ isOpen }}>
      <SidebarNav />
    </SidebarContext.Provider>
  );
}

function SidebarNav() {
  let { isOpen } = useContext(SidebarContext);

  return (
    <div>
      <p>Home</p>

      {isOpen && <Subnav />}
    </div>
  );
}
*/