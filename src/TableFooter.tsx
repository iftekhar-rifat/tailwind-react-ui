import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const TableFooter = React.forwardRef<HTMLDivElement, Props>(function TableFooter(props, ref) {
  const { className, children, ...other } = props

  const { tableFooter } = styles

  const baseStyle = tableFooter.base

  const cls = clsx(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default TableFooter
