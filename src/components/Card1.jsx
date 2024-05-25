export function Card1(props) {
    return (
        <>
            <div class="rounded overflow-hidden text-black w-auto shadow-2xl border border-slate-300">


                <div class="bg-white-50 shadow-custom p-5 grid gap-y-4 ">



                    <div class="flex items-center text-lg ">
                        {props.title}
                        <div class="pl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z">
                                </path>
                            </svg>
                        </div>
                    </div>


                    <div class="flex justify-between items-center">
                        <div class="font-semibold text-3xl">
                        {props.amount}
                        </div>
                      
                        <div class="flex cursor-pointer text-xl">
                            <div class="underline">
                                13 orders
                            </div>
                            <div className="mt-3">
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                            </svg>
                            </div>
                        </div>
                    </div>


                </div>



            </div>
        </>
    )

}