 
 import { Card } from "./Card"
 import { Card1 } from "./Card1"
 import {Transaction}  from "./Transaction"
export function AsideItems(){
    return(
        <>
        <div className="p-3 sm:ml-56">
            <div className="flex flex-row justify-between py-4">
                <div className="text-2xl font-medium">Overview</div>
                <div>
                   <label for="months">select month :</label>
                   <select name="months" id="months" >
                    <option>Janauary</option>
                    <option>Ferbruary</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                    
                   </select></div>
            </div>
            


                <div className="p-4 ">
                    

                    {/* //items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">

                        <div className="flex items-center  rounded ">
                            <p className="text-2xl">
                                <Card></Card>
                            </p>
                        </div>

                        <div className="flex items-center  rounded ">
                            <p className="text-2xl">
                                <Card1 title={"Amount Pending"} amount={"₹ 23,92,312.19"} order={"12"}> </Card1>
                            </p>
                        </div>

                        <div className="flex items-center  rounded ">
                            <p className="text-2xl">
                                <Card1 title={"Amount Proceesed"} amount={"₹ 23,92,312.19"} order={"0"}></Card1>
                            </p>
                        </div>
                    </div>


                    {/* <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </p>
                    </div> */}
                   

                   <Transaction></Transaction>
                </div>
            </div>
        </>
    )
}