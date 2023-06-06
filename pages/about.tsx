// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next'
import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { MDXComponents } from '@/components/MDXComponents'
import { PageSEO } from '@/components/SEO'
import Image from "next/image"
const DEFAULT_LAYOUT = 'AuthorLayout'
import SocialIcon from '@/components/social-icons'

export const getStaticProps = async () => {
  const authors = allAuthors
  return { props: { authors } }
}

export default function About({ authors }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(authors)
  return (
    <>
    <PageSEO title={`عنا`} description={`المؤلفين`} />
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            عنّا
          </h1>
        </div>
        {
          authors.map(item=>{
            return (
              <div className="items-start xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 py-8">
         
              <div className="flex flex-col items-center space-x-2 ">
                
                <Image
                  src={item.avatar}
                  alt="avatar"
                  width={192}
                  height={192}
                  className="h-48 w-48 rounded-full object-cover"
                />
                <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{item.name}</h3>
                <div className="text-gray-500 dark:text-gray-400">{item.occupation}</div>
                <div className="text-gray-500 dark:text-gray-400">{item.company}</div>
                <div className="flex space-x-3 pt-6">
                  <SocialIcon kind="mail"  href={`mailto:${item.email}`} />
                  <SocialIcon kind="github" href={item.github} />
                  <SocialIcon kind="linkedin" href={item.linkedin} />
                  <SocialIcon kind="twitter" href={item.twitter} />
                </div>
              </div>
              <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2
                whitespace-pre-line
              ">{item.body.raw}</div>
            </div>
            )
          })
        }
    
      </div>
    </>
    
  )
}
