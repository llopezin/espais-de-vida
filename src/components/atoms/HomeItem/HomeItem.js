import React from 'react'
import PropTypes from 'prop-types'
import GatsbyLink from 'gatsby-link'

const HomeItem = ({
  title,
  price,
  image,
  slug,
  rooms,
  bathrooms,
  meters,
  address,
  metroStation
}) => {
  return (
    <GatsbyLink to={`/${slug}`}>
      <div role='region' aria-labelledby={slug}>
        <p className={style.price}>{price}</p>
        <p id={slug}>{title}</p>
        <p id={slug}>{title}</p>
        <div>
          <p>{rooms}</p>
          <p>{bathrooms}</p>
          <p>{meters}</p>
        </div>
      </div>
    </GatsbyLink>
  )
}

HomeItem.propTypes = {}

export default HomeItem
