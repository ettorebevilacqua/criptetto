import cn from 'clsx'
import styleLayout from './Layout.module.css'
import { RootContext } from "@lib/context"
import { Category } from "@lib/types/category"
import { Page } from "@lib/types/types"
import Navbar from '../Navbar'
import Footer from '../Footer'

interface Props {
    pageProps: {
        pages?: Page[]
        categories: Category[]
    }
    children?: React.ReactNode
}

const Layout: React.FC<Props> = ({
    children,
    pageProps: { categories = [], ...pageProps },
}) => {
    const navBarlinks = categories.slice(0, 2).map((c) => ({
        label: c.name,
        href: `/search/${c.slug}`,
    }))

    return (
        <RootContext.Provider value={""}>
            <div className={cn(styleLayout.root)}>
                <Navbar links={navBarlinks} />
                <main className="fit">{children}</main>
                <Footer pages={pageProps.pages} />
                {/* <ModalUI /> */}

            </div>
        </RootContext.Provider>
    )
}

export default Layout