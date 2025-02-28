import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody = React.forwardRef<HTMLDivElement, Props>(function CardBody(props, ref) {
  const { className, children, ...other } = props
  const { cardBody } = styles

  const baseStyle = cardBody.base

  const cls = clsx(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default CardBody
