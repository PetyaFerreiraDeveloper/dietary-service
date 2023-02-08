export default function Search() {
    return (
        <div className="flex gap-5 bg-gray-300 justify-between max-w-md mb-10">
            <label htmlFor="search" className="w-1/3 flex items-center p-2" >Search for food:</label>
            <input name="search" placeholder="Search..." className="p-2 w-2/3" />
        </div>
    )
}