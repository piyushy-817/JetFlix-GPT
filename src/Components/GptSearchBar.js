import { useRef } from "react"
import openAiConstants from "../utils/openAi"



const GptSearchBar = ()=>{

const searchText = useRef(null)
 
const gptQuery = "act as a movie recommendation and suggest 5 movies for the query "+ searchText.current.value+" and add coma between all of them."
    
const handleGptSearch = async()=>{
    console.log(searchText.current.value)
   
        const gptResults = await openAiConstants.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        })
        ;
        console.log(gptResults)

}
  return (
    <div className="pt-[10%] flex justify-center">
     <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg" onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} className="m-4 p-4 col-span-9" type="text" placeholder="What do you want to search today"></input>
        <button onClick={handleGptSearch} className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">Search</button>
     </form>

    </div>
  )
}

export default GptSearchBar