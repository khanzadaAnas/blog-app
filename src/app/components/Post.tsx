import Image from "next/image"
import b from "/public/b.jpeg"
import { TPost } from "../data/posts"


type PostProps = {
  post: TPost
}
export default function Post (props: PostProps){
    return(
        
      <div className="p-3 md:w-1/3 sm:mb-0 mb-3">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image src={b}  alt="content image"  className="object-cover object-center h-full w-full" />
        </div>
        <h2 className="text-xl font-medium title-font text-teal-400 mt-5">{props.post.title}</h2>
        <p className="text-base text-purple-950 leading-relaxed mt-2">{props.post.body}</p>
        <a href={`/posts/${props.post.id}`}className="text-emerald-600 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
     
    
   
    )
}