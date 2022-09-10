import { useContractRead } from 'wagmi'
import { AUCTION_CONTRACT } from '../../config'


const useAuctionRead = (functionName='') => {
    
    const { data, isError, isLoading } = useContractRead({
        ...AUCTION_CONTRACT,
        functionName,
      })

      return  { data, isError, isLoading }
}

export default useAuctionRead

