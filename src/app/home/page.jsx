import Destinitionslider from '@/components/Destinitionslider'
import FeaturedBlog from '@/components/FeaturedBlog'
import Newslwtter from '@/components/Newslwtter'
import Sponsersection from '@/components/Sponsersection'
import Treveltips from '@/components/Treveltips'
import React from 'react'

const page = () => {
  return (
    <div>
      <Destinitionslider/>
      <Sponsersection/>
      <Treveltips/>
      <Newslwtter/>
      <FeaturedBlog/>
    </div>
  )
}

export default page
