import { ethers } from 'ethers'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { AUCTION_CONTRACT } from '../../config'


const useAuctionWrite = (functionName='', value=0) => {

    const { config } = usePrepareContractWrite({
        ...AUCTION_CONTRACT,
        functionName,
        overrides: {
            value: ethers.utils.parseEther(value.toString()),
          },
      })

    const { data, isError, isLoading, write, writeAsync } = useContractWrite(config)

      return  { data, isError, isLoading, write, writeAsync }
}

export default useAuctionWrite

