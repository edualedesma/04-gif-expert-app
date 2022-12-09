import { useState } from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  console.log(categories);

  return (
    <>
      {/* titulo */}
      <h1>Gif Expert App</h1>
      {/* input */}

      {/* listado de gifs */}
      <ol>
        { categories.map( category => {
          return <li key={ category }>{ category }</li>
        } ) }
        
      </ol>
        {/* gif item */}
    </>
  )
}
