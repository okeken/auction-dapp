import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { AUCTION_CONTRACT } from '../../config'


const useAuctionWrite = (functionName='') => {

    const { config } = usePrepareContractWrite({
        ...AUCTION_CONTRACT,
        functionName,
      })

    const { data, isError, isLoading, write, writeAsync } = useContractWrite(config)

      return  { data, isError, isLoading, write, writeAsync }
}

export default useAuctionWrite

