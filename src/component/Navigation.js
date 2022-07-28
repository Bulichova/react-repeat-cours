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
  // console.log('links', links)
  const handleItemClick = () => {
    // console.log('item click')
  }
  const handleLinkClick = (e) => {
    // console.log(e)
    // console.log('click')
    // console.log(e.target.to)
  }
  const handleLinkMouseEnter = (e) => {
    // console.log('enter')
  }
  return (
    <nav>
      <List>
        {links &&
          links.map(({ id, label, path }) => (
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
