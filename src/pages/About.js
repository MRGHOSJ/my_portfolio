import myPhoto from '../images/aboutMe.png'
import mouse from '../images/mouse.png'
import navCircle from '../images/nav/About.png'

export default function About() {
    return (
        <div className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto pt-1">
                <div>
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="grid grid-cols-3 gap-12 overflow-hidden sm:text-center lg:text-left">
                            <div className='col-span-1'>
                                <img src={myPhoto} alt=""/>
                            </div>
                            <div className='col-span-2 pt-2'>
                                <p className="font-sans text-4xl not-italic font-normal text-left text-white">Yassine Bouzouita</p>
                                
                                <div className='pt-4 grid grid-cols-2'>
                                    <div className='col-span-1'>
                                        <p className="font-sans text-sm not-italic font-normal text-left text-gray-600">Birthdate</p>
                                        <p className="font-sans text-sm not-italic font-normal text-left text-white">21 Nouvember 2002</p>
                                    </div>
                                    <div className='col-span-1'>
                                        <p className="font-sans text-sm not-italic font-normal text-left text-gray-600">Location</p>
                                        <p className="font-sans text-sm not-italic font-normal text-left text-white">Tunisia</p>
                                    </div>
                                </div>

                                <div className='pt-4'>
                                    <p className="font-sans text-sm not-italic font-normal text-left text-gray-600">Languages</p>
                                    <p className="font-sans text-sm not-italic font-normal text-left text-white">English: Fluent</p>
                                    <p className="font-sans text-sm not-italic font-normal text-left text-white">Arabic: Native or Bilingual</p>
                                    <p className="font-sans text-sm not-italic font-normal text-left text-white">French: Basic</p>
                                </div>

                                <div className='pt-4'>
                                    <p className="font-sans text-sm not-italic font-normal text-left text-gray-600">Skills</p>
                                    
                                    <div className='grid grid-cols-2 gap-10'>
                                        <div className='col-span-1'>
                                        <p className="font-sans text-sm not-italic font-normal text-left text-white">Frontend Development</p>
                                        
                                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "85%"}}> 85%</div>
                                            </div>    
                                        </div>
                                        <div className='col-span-1'>
                                        <p className="font-sans text-sm not-italic font-normal text-left text-white">Backend Development</p>
                                        
                                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "45%"}}> 45%</div>
                                            </div>    
                                        </div>    
                                    </div>

                                    <div className='pt-4 grid grid-cols-2 gap-10'>
                                        <div className='col-span-1'>
                                        <p className="font-sans text-sm not-italic font-normal text-left text-white">FrameWork</p>
                                        
                                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "70%"}}> 70%</div>
                                            </div>    
                                        </div>
                                        <div className='col-span-1'>
                                        <p className="font-sans text-sm not-italic font-normal text-left text-white">Mobile App Development</p>
                                        
                                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "30%"}}> 30%</div>
                                            </div>    
                                        </div>    
                                    </div>
                                    
                                    <div className='pt-4'>
                                        <p className="font-sans text-sm not-italic font-normal text-left text-white">Design</p>
                                        
                                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "90%"}}> 90%</div>
                                            </div>    
                                    </div>

                                    <div className='pt-4 grid grid-cols-2 gap-10'>
                                        <div className='col-span-1'>
                                        <p className="font-sans text-sm not-italic font-normal text-left text-white">Database</p>
                                        
                                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "60%"}}> 60%</div>
                                            </div>    
                                        </div>
                                        <div className='col-span-1'>
                                        <p className="font-sans text-sm not-italic font-normal text-left text-white">Data Visualization</p>
                                        
                                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "40%"}}> 40%</div>
                                            </div>    
                                        </div>    
                                    </div>
                                </div>
                                    
                                
                                <div className='pt-4'>
                                    <p className="font-sans text-sm not-italic font-normal text-left text-gray-600">Education</p>
                                    <p className="font-sans text-sm not-italic font-normal text-left text-white">ESPRIT : Ecole Supérieure Privée d'Ingénierie et de Technologies</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 pl-10">
                
            </div>
            <img className='object-contain h-10 md:absolute md:right-12 md:top-1/2 hidden md:flex' src={navCircle} />
            <img className='object-contain h-20 object-center w-full shakeAnimation hidden md:flex' src={mouse}/>
        </div>
    );
}