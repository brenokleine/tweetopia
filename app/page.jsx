
import Feed from "@/components/Feed"

const Home = () => {
  
  
    return (
        <section className=' w-full flex flex-col items-center justify-center'>
            {/* svg logo here */}


            <h1 className=" text-6xl text-center text-primary font-bold poetsen-font flex flex-col gap-3">
                Discover & share your quotes!
                
                <span className="text-3xl text-tertiary">
                    The best quotes from the internet are here...
                </span>
            </h1>
            <p className=" w-1/2 text-center text-xl text-primary pt-12">
                Welcome to our quote-sharing mini blog! Discover inspiration in every post and join our community in spreading positivity through the power of words.
            </p>

            <Feed 
                
            />

        </section>
  )
}

export default Home