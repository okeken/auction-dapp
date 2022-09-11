import React, {useState} from "react"
import type { NextPage } from 'next'
import Image from 'next/image'
import { useAccount} from "wagmi"
import RightArrow from '../components/commons/Icons/RightArrow'
import useAuctionRead from './hooks/useAuctionRead'
import useAuctionWrite from './hooks/useAuctionWrite'

const Home: NextPage = () => {
  const [amount, setAmount] = useState(0)
  const {address} = useAccount()
  const {data:started, isError,isLoading} = useAuctionRead("started")
  const {data:ended} = useAuctionRead("ended")
  const {data:ownerAddress} = useAuctionRead("owner")
  const {writeAsync, data:writeData, isLoading:writeLoading, isError:writeError} = useAuctionWrite("Auction")
  const {writeAsync:bidAsync, isLoading:bidLoading}  = useAuctionWrite("bid", amount ?? 0)
  
 const handleAmount = (e:any)=>{
    setAmount(e.target.value)
  }

  const isAdmin = ownerAddress === address ? true : false

  const _statusButton = () =>{
    if(isLoading){
      return <div>Loading...</div>
    }

    if(isError){
      return <div>Error...</div>
    }

    if(isAdmin && !started){
      return  <button className='flex items-center p-2 mx-auto mb-3 text-blue-500 bg-blue-200 border rounded-md'>Start Auction <RightArrow className='ml-3' /> </button>
    }

    if(!started ){
      return <div className='p-2 mx-auto mb-3 text-blue-500 bg-blue-200 border rounded-md'>Auction Not Started</div>
    }

    if(started && !ended){
      return <div className='p-2 mx-auto mb-3 text-green-500 bg-green-200 border rounded-md'>Auction In Progress</div>
    }

    if(ended){
      return <div className='p-2 mx-auto mb-3 text-red-500 bg-red-200 border rounded-md'>Auction Ended</div>
    }

    
    
    
  }
  return (
 <div>

  <div className='grid justify-between w-11/12 grid-cols-1 mx-auto lg:grid-cols-2'>
    <div className='flex-1'>
      <Image src='https://source.unsplash.com/random/?productivity,city' width={700} height={500}  />

    </div>
    <div className='flex justify-center flex-1 text-center'>
      <div  className='pt-12'>
      <button  onClick={() => writeAsync?.()}>{writeLoading ? "Loading..." : "Write"}</button>
      {_statusButton()}             
        <div className='mt-6'>
          <span >Highest Bid:
            <span className='mx-1 text-2xl text-red-500'> 3.00</span>
           
            <span className='my-1 text-xs '>ETH</span>
          </span>
        </div>

        <div>         
          <input  value={amount} onChange={handleAmount} type='number' placeholder='Enter your bid' className='w-3/4 p-2 my-6 text-center border rounded-md' />
          <div>
          <button
          type="button"
          disabled={bidLoading || !amount || !started}
          onClick={() => bidAsync?.()} 
          className='w-full p-2 text-blue-200 bg-green-600 border-0 rounded-md'>Place Bid</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Home
