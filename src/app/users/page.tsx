import Users from "./components/Users";
import { TUser, users } from "./data/users";

export default async function UsersPage() {
  const response = await fetch ("https://jsonplaceholder.typicode.com/users");
  const users: TUser[] = await response.json();
  console.log("user", users);

  return (

        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Users</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">All Users details Available on a Click. For more details click own users </p>
          </div>
          <div className="flex flex-wrap -m-4">
          {users.map((user) => (<Users key={user.id} user={user} />))}

       

            </div>
            </div>
            </section>
    )
}