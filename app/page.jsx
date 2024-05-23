
import Feed from "@/components/Feed"
import { Button } from "@chakra-ui/react"

const Home = () => {
  
  
    return (
        <section className="flex lg:flex-row lg:backdrop-blur-0 lg:gap-0 h-full justify-center flex-col backdrop-blur-md p-10 gap-14">
            <div className="lg:w-1/2 flex flex-col h-full justify-center items-center gap-6 ">
                <div className="flex flex-col justify-center items-center gap-6">
                    <h1 className=" text-6xl text-center text-primary font-bold poetsen-font flex flex-col gap-3">
                        Discover & share your quotes!
                        <span className="text-3xl text-tertiary">
                            The best quotes from the internet are here...
                        </span>
                    </h1>
                    <p className=" w-1/2 text-left text-xl text-primary">
                        Welcome to our quote-sharing mini blog! Discover inspiration in every post and join our community in spreading positivity through the power of words.
                    </p>
                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
                <Button
                    bg={'primary'}
                    color={'white'}
                    rounded={'full'}
                    size={'lg'}
                >
                    Get Started
                </Button>
            </div>
        </section>
  )
}

export default Home