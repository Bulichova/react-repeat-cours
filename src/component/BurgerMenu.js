import {  useContext } from 'react'
import { scaleDown as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
import styled from 'styled-components'

const StyledMenu = styled(Menu)`
  background: red;
`

function BurgerMenu({ parentId, neighborId }) {
  const { navLinks } = useContext(AppContext)

  return (
    <StyledMenu
      className="styledBurger"
      pageWrapId={neighborId}
      outerContainerId={parentId}
    >
      {navLinks?.map(({ id, label, path }) => {
        return (
          <Link key={id} id={path} className="menu-item" to={`/${path}`}>
            {label}
          </Link>
        )
      })}
    </StyledMenu>
  )
}

export default BurgerMenu
