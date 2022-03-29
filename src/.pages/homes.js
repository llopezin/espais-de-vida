import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import BasicPageLayout from '../templates/BasicPageLayout'

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
            bathrooms
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
    <BasicPageLayout>
      homes
      {homes.map(({ node: home }) => (
        <div key={home.id}>
          {home.title}:{home.price}
        </div>
      ))}
    </BasicPageLayout>
  )
}

export default Homes
