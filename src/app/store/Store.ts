import {create} from "zustand"

interface IStore {
  ethAddr: string
  chain : string
  setEthAddr : (addr: string) => void
  setChain : (chain : string) => void
}


export const useStore = create<IStore>((set)=>(
  {
    ethAddr : "",
    chain : '',
    setEthAddr : (addr : string)=>set((state) => ({ ...state , ethAddr : addr})),
    setChain : (chain : string)=>set((state) => ({ ...state , chain : chain})),
  }
))