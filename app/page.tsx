import Image from 'next/image'
import Hero from './components/hero/Hero'
import Brands from './components/Brands'
import Usection from './components/Us'
import MediaLink from './components/MediaLink'
import Categories from './components/Categories'
import Host from './components/Host/Host'
import FavoriteMost from './components/FavoriteMost'
import { client } from '@/sanity/lib/client'
import { groq} from 'next-sanity'
import Loader from './components/loader/Loader'
import FaqSection from './components/Faq'
import ClientOnly from './components/ClientOnly'


export default async function  Home(){
   const query = groq`
   *[_type == 'episode']{
    ...,
    title,
    coverArt,
    summary,
    fileUrl,
    "categories": *[_type=='category' && references(^._id)] {
      title,
      slug,
      ...,
    },
   }
 `

   const categoryQuery = groq`
      *[_type == 'category']{
        ...,
      }
   `

  const posts = await client.fetch(query);
  const categories = await client.fetch(categoryQuery);
  const filterposts = posts.filter((post: any, index: number) => index < 4)

  return(
   <main>
    <ClientOnly>

      <Loader  />
      <Hero />
      <Brands />
      <Usection />
      <MediaLink />
      <Categories categories={categories} />
      <Host />
      <FavoriteMost filterposts={filterposts} />
      <FaqSection />
    </ClientOnly>

   </main>
  )
}