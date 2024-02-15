import React from 'react'
interface pageProps{
    params:string
}
const page = ({params}:pageProps) => {
    console.log(params);
    
  return (
    <div>sad</div>
  )
}

export default page