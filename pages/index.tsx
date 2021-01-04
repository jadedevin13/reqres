import Head from "next/head";
import Pagination from "@app/components/pagination";
import UserList from "@app/components/user-list";

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Cabatlao Reqres</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto my-20">
        <h1 className="text-2xl text-center my-20">Cabatlao User Reqres</h1>
        <UserList />
        <div className="text-center my-10">
          <Pagination/>
        </div>
      </main>
    </div>
  );
}
