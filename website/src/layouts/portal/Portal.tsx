import React, { PropsWithChildren } from 'react'

import styles from './style.module.less'

const Portal: React.FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <div className={styles['portal']}>
      <div className={styles['content']}>
        {children}
      </div>
    </div>
  )
}

export default Portal
