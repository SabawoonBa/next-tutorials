import React from 'react'

interface Props {
    params: {id: number, photo: string}
}

const PhotoDetails: React.FC<Props> = ({
    params
}) => {
  return (
    <div>PhotoDetails: {params.id} {params.photo}</div>
  )
}

export default PhotoDetails