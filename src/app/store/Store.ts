import {create} from "zustand"

interface IStore {
  ethAddr: string
  chain : string
  fromUnix : number
  toUnix : number
  setFromUnix : (from: number) => void
  setToUnix : (to: number) => void
  setEthAddr : (addr: string) => void
  setChain : (chain : string) => void
}


export const useStore = create<IStore>((set)=>(
  {
    ethAddr : "",
    chain : '',
    fromUnix : 0,
    toUnix : 0,
    setFromUnix : (from : number)=>set((state) => ({ ...state , fromUnix : from})),
    setToUnix : (to : number)=>set((state) => ({ ...state , toUnix : to})),
    setEthAddr : (addr : string)=>set((state) => ({ ...state , ethAddr : addr})),
    setChain : (chain : string)=>set((state) => ({ ...state , chain : chain})),
  }
))