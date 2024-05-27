import React from 'react'
import Logo from './Logo'
import Counter from './Counter'

const Header = ({totalNumberofItems, numberOfItemsPacked}) => {
  return (
    <header>
      <Logo />
      <Counter totalNumberofItems={totalNumberofItems} numberOfItemsPacked={numberOfItemsPacked}/>
    </header>
  )
}

export default Header
