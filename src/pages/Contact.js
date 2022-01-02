import mouse from '../images/mouse.png'
import navCircle from '../images/nav/Contact.png'

export default function Contact() {
    return (
        <div className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto pt-1">
                <div>
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="overflow-hidden sm:text-center lg:text-left">   
                            <p className="font-sans text-4xl not-italic font-normal text-white text-center">Get in touch!</p>
                            <p className='text-gray-600 text-center'>Ask me anything, I am happy to help with any freelance work. Reach out!</p>
                        </div>
                    </main>
                </div>
            </div>
            <div className='grid grid-cols-12'>
                
            <div className="p-20 md:col-span-3 col-span-12">
                <a href="mailto:bouzouitayassine@gmail.com">
                    <div className="rounded-lg hover:rounded-full shadow-lg bg-white p-6 text-center cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="" class="rounded-t-lg h-20 mx-auto"/>
                        <div className="p-6">
                        <h2 className="font-bold mb-2 text-2xl text-black">Mail
                        </h2>
                        <p className='text-sm font-thin'>Bouzouita Yassine</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="p-20 md:col-span-3 col-span-12">
                <a href='https://www.facebook.com/profile.php?id=100014414821451' target={"_blank"}>
                    <div className="rounded-lg hover:rounded-full shadow-lg bg-white p-6 text-center cursor-pointer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" class="rounded-t-lg h-20 mx-auto"/>
                        <div className="p-6">
                        <h2 className="font-bold mb-2 text-2xl text-black">Facebook
                        </h2>
                        <p className='text-sm font-thin'>Bouzouita Yassine</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="p-20 md:col-span-3 col-span-12">
                <a href='https://www.linkedin.com/in/yassine-bouzouita-764977168/' target={"_blank"}>
                    <div className="rounded-lg hover:rounded-full shadow-lg bg-white p-6 text-center cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" class="rounded-t-lg h-20 mx-auto"/>
                        <div className="p-6">
                        <h2 className="font-bold mb-2 text-2xl text-black">linkedin
                        </h2><p className='text-sm font-thin'>Yassine Bouzouita</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="p-20 md:col-span-3 col-span-12">
                <a href='https://github.com/MRGHOSJ' target={"_blank"}>
                    <div className="rounded-lg hover:rounded-full shadow-lg bg-white p-6 text-center cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" class="rounded-t-lg h-20 mx-auto"/>
                        <div className="p-6">
                        <h2 className="font-bold mb-2 text-2xl text-black">Github
                        </h2>
                        <p className='text-sm font-thin'>MRGHOSJ</p>
                        </div>
                    </div>
                </a>
            </div>
            
            </div>
            <img className='object-contain h-10 md:absolute md:right-12 md:top-1/2 hidden md:flex' src={navCircle} />
            <img className='object-contain h-20 object-center w-full shakeAnimation hidden md:flex' src={mouse}/>
        </div>
    );
}