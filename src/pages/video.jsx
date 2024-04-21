export default function Video() {
    return (    
        <div>
            <div className='flex flex-col w-full h-full bg-center bg-cover min-h-[100vh] min-w-[70vw] max-w-8xl'>
                <div className="flex flex-wrap w-full mt-12 ml-16 h-4/5 lg:px-48">
                    <div className='flex flex-col items-center h-full lg:w-1/2 sm:w-full min-w-96'>
                        <div className='inline-flex items-start w-full ml-32 text-3xl  mb-2 text-[#423838]'>姿勢不良</div>
                        <iframe className="w-4/5 h-full min-h-72 " src="https://www.youtube.com/embed/EXpOyyidTk8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='flex flex-col items-center h-full lg:w-1/2 sm:w-full min-w-96'>
                        <div className=' inline-flex items-start w-full ml-32 text-3xl  mb-2 text-[#423838]'>AI應用於智慧醫療</div>
                        <iframe className="w-4/5 h-full min-h-72" src="https://www.youtube.com/embed/QoBEb1arCyA" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="max-w-full mt-10 border-t-4 border-gray-300 mx-60 md:invisible lg:visible"></div>
                <div className="flex flex-col items-center justify-center gap-10 mt-5 ">
                    <p className="text-4xl font-semibold text-gray-600 ">聲明</p>
                    <p className="w-1/2 text-xl font-semibold text-center text-gray-600 ">所有衛教資訊內容僅供參考使用，無法提供任何醫療行為和取代醫師當面診斷，若有身體不適的情況發生，請您盡速就醫，以免延誤病情！</p>
                </div>
            </div>
        </div>
    )
}