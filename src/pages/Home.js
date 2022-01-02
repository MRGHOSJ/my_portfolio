import myPhoto from '../images/Home.png'
import circles from '../images/circles.png'
import mouse from '../images/mouse.png'
import navCircle from '../images/nav/home.png'
export default function Home() {
    return (
        <div className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto pt-10">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="grid overflow-hidden grid-cols-12 grid-rows-1 gap-px sm:text-center lg:text-left">
                            <p className="font-sans text-4xl not-italic font-normal text-left md:pt-40 text-white col-start-1 col-span-12 pb-10">Hi , I'm Yassine Bouzouita</p>
                            <img className='object-contain h-28 col-start-1 col-span-1' src={circles} />
                            <p className="mt-3 text-xs text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0 col-start-2 col-span-8">
                            also known as Ghost in some communities, a creative coder and self-proclaimed designer who specializes in front-end development.
                            </p>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pl-10 lg:pt-10">
                <img src={myPhoto} alt="" />
            </div>
            <img className='object-contain h-10 md:absolute md:right-12 md:top-1/2 hidden md:flex' src={navCircle} />
            <img className='object-contain h-20 object-center w-full shakeAnimation hidden md:flex' src={mouse}/>
        </div>
    );
}