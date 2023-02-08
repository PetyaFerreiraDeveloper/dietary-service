export default function Search() {

  function submitHandler(e) {
    // e.preventDefault();
    // let formData = new FormData(e.target);
    // const formEntries = Object.fromEntries(formData);
    // console.log(formEntries);
  }
  return (
    <form className="mb-10" onSubmit={submitHandler}>
      <div className="flex gap-5 bg-gray-200 justify-between max-w-md mb-5">
        <label htmlFor="search" className="w-1/3 flex items-center p-2">
          Search for food:
        </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="p-2 w-2/3"
        />
      </div>
      <button role="button" name="submit" id="submit" className="py-2 px-8 bg-gray-300">
        Submit
      </button>
    </form>
  );
}
