import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Homes = () => {
  const {
    allContentfulHome: { edges: homes }
  } = useStaticQuery(graphql`
    {
      allContentfulHome {
        edges {
          node {
            id
            mainImage {
              description
              file {
                url
              }
            }
            price
            rooms
            slug
            title
            meters
          }
        }
      }
    }
  `)
  return (
    <div>
      homes
      {homes.map(({ node: home }) => (
        <div key={home.id}>
          {home.title}:{home.price}
        </div>
      ))}
    </div>
  )
}

export default Homes
