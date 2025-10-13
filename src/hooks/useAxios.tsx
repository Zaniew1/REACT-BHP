import axios from "axios";
import { useEffect, useState } from "react";

type fetchParameters = {
    url:string,
    method: string,
    data?: any ,
    params?: any ,
}

const useAxios = () => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("");
    const [loading, setLoading] = useState<boolean>(false);

    const axiosInstance = axios.create({
        'baseURL':"http://localhost:4000",
    })
    axiosInstance.interceptors.request.use((config)=>{
        return config;
    }, (error)=>{
        return Promise.reject(error)
    })
    axiosInstance.interceptors.response.use((response)=>{
        return response;
    }, (error)=>{
        return Promise.reject(error)
    })

    let controller = new AbortController();

    useEffect(()=>{
        return ()=> controller?.abort()
    }, [])


    const  fetchData= async ({url, method, data = {}, params = {}}: fetchParameters) =>{
        setLoading(true);
        controller.abort();
        controller = new AbortController();
        try{
            const result = await axiosInstance({
                url,
                method,
                data,
                params,
                signal: controller.signal
            })
            setResponse(result.data?.success)
        }catch(e: any){
            console.log(e?.response?.data?.errors?.[0]?.message)
            if(axios.isCancel(e)){console.log("Request cancelled: "+e)}
            else setError(e?.response?.data?.errors?.[0]?.message ?? e.message);
        }finally{
            setLoading(false);
        }
    }
    return {response, error, loading, fetchData};
}
export default useAxios