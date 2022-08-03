import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import { ThemeContext } from '../contexts/ThemeContext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`

const StyledUserGreet = styled.div`
  margin-right: 30px;
  color: pink;
  font-weight: 500;
`


const List = styled.ul`
  display: flex;
`

const Item = styled.li`
  margin-right: ${({ contextStyles }) => contextStyles.itemMarginRight};
  color: ${({ contextColors }) => contextColors.black};
  :hover {
    color: ${(contextColors) => contextColors.hoverLinkColor};
  }
`

function Navigation() {
  const { navLinks, user } = useContext(AppContext)
  const { colors, styles } = useContext(ThemeContext)
  // console.log('colors', colors)
  // console.log('styles', styles)

  const handleItemClick = () => {}
  const handleLinkClick = (e) => {}
  const handleLinkMouseEnter = (e) => {}
  return (
    <StyledNav>
      <StyledUserGreet>Hello ,{user?.name}</StyledUserGreet>
      <List>
        {navLinks?.map(({ id, label, path }) => (
          <Item
            key={id}
            onClick={handleItemClick}
            contextStyles={styles}
            contextColors={colors}
          >
            <Link
              to={`/${path}`}
              onClick={handleLinkClick}
              onMouseEnter={handleLinkMouseEnter}
            >
              {label}
            </Link>
          </Item>
        ))}
      </List>
    </StyledNav>
  )
}

export default Navigation
