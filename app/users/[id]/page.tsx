import React from 'react'

interface Props {
    params: {id: string}
}

const DetailsPage: React.FC<Props> = ({
    params
}) => {
  return (
    <div>
      This is the Page that users will be detailed!!! {params.id}
    </div>
  )
}

export default DetailsPage
