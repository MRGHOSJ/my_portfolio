import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto pt-1">
                <div>
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="overflow-hidden sm:text-center lg:text-left">   
                            <p className="font-sans text-4xl not-italic font-normal text-black text-center">Portfolio</p>
                        </div>
                    </main>
                </div>
            </div>
            <nav className="container bg-gray-100 mx-auto p-4 m-10">
                <div class="space-x-8 text-center">
                    <a href="" className='text-gray-400 hover:text-xs'>Everything</a>
                    <a href="" className='hover:text-xs'>Website</a>
                    <a href="" className='hover:text-xs'>Design</a>
                    <a href="" className='hover:text-xs'>App</a>
                </div>
            </nav>
    <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <ProjectCard/>
    </div>
</div>
    );
}