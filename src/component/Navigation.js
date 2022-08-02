import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const List = styled.ul`
  display: flex;
`

const Item = styled.li`
  margin-right: 30px;
`

function Navigation({ links }) {
  const handleItemClick = () => {}
  const handleLinkClick = (e) => {}
  const handleLinkMouseEnter = (e) => {}
  return (
    <nav>
      <List>
        {links?.map(({ id, label, path }) => (
          <Item key={id} onClick={handleItemClick}>
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
    </nav>
  )
}

export default Navigation
