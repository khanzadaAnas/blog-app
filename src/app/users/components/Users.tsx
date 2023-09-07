import { TUser } from "../data/users"

type UserProps= {
    user: TUser
}

export default function Users (props: UserProps){
    return(

  
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-lg text-orange-600 font-medium title-font mb-2">{props.user.name}</h2>
          <p className="leading-relaxed text-gray-900  pb-2">{props.user.email}</p>
          <h5 className="text-orange-600"><a href ={`/users/${props.user.id}`}> FOR MORE DETAITS</a> </h5>
        </div>
      </div>

      
  
  
    )
}