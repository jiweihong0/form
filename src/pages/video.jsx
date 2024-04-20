export default function Video() {
    return (    
        <div>
            <div className='w-screen h-screen bg-cover bg-center flex flex-col max-w-8xl'>
                <div className=" flex flex-wrap w-full h-2/5 lg:px-48 mt-12  ">
                    <div className=' flex flex-col items-center lg:w-1/2 sm:w-full h-full min-w-96 '>
                        <div className='inline-flex items-start w-full ml-32 text-3xl  mb-2 text-[#423838]'>姿勢不良</div>
                        <iframe className=" w-4/5 h-full " src="https://www.youtube.com/embed/EXpOyyidTk8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className=' flex flex-col items-center lg:w-1/2 sm:w-4/5 h-full min-w-96 '>
                        <div className=' inline-flex items-start w-full ml-32 text-3xl  mb-2 text-[#423838]'>AI應用於智慧醫療</div>
                        <iframe className=" w-4/5 h-full " src="https://www.youtube.com/embed/QoBEb1arCyA" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
               
                <div className=" border-t-4 max-w-full border-gray-300 mx-60 mt-10  md:invisible lg:visible "></div>
                <div className=" flex flex-col justify-center items-center gap-10 mt-5">

                    <p className=" text-4xl font-semibold text-gray-600">聲明</p>
                    <p className=" text-xl font-semibold text-gray-600 w-1/2 text-center">所有衛教資訊內容僅供參考使用，無法提供任何醫療行為和取代醫師當面診斷，若有身體不適的情況發生，請您盡速就醫，以免延誤病情！</p>
                </div>
            </div>
        </div>
    )
}