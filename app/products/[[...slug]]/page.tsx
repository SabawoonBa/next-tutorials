import React from 'react'

interface Props {
    params: { slug: string[]}
}

const ProductPage: React.FC<Props> = ({
    params
}) => {
  return (
    <div>
      This is a product page {params.slug}
    </div>
  )
}

export default ProductPage
