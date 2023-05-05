import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />
        
            <div className={styles.profile}>
                <Avatar src="https://github.com/cecgil.png"/>

                <strong>Carlos Gil</strong>
                <span>teste</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Teste button
                </a>
            </footer>
        </aside>
    )
}