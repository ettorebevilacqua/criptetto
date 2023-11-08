import styles from '../../styles/layout.module.css'

export default function Layout({  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div  style={{ width:"100%", backgroundColor: "white" }}  className={styles.innerLayout}>
        {children}
    </div>)
}