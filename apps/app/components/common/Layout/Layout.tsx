import cn from 'clsx'
import styleLayout from './Layout.module.css'
import Footer from '../Footer'
import RootProvider, { RootContext } from 'context/app.context'
import Navbar from '../Navbar'

const Layout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {

    return (
        <RootProvider>
            <div className={cn(styleLayout.root)}>
                <Navbar />
                <main className="fit">{children}</main>
                {/* <Footer pages={pages} />
                 <ModalUI /> */}

            </div>
        </RootProvider>
    )
}

export default Layout