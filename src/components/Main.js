import Search from "./Search";
import FoodList from "./FoodList";

export default function Main({ results }) {
  console.log(results);
  return (
    <>
      <main className="m-10">
        <h1 className="text-red-500 text-center mb-10">
          This is brand new app using the FDC API
        </h1>

        <Search />

        <h2 className="mb-10">
          Here is the list with the searched foods and their nutrients:
        </h2>

        <FoodList results={results} />
      </main>
    </>
  );
}

export async function getServerSideProps({ query }) {
  console.log("hello from the server");

  const baseUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query.search}&api_key=${process.env.API_KEY}`;

  const res = await fetch(baseUrl);
  const data = await res.json();
  return {
    props: {
      results: data,
    },
  };
}
