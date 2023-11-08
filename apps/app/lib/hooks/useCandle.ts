import useSWR from "swr"

const fetcher = (url:string) => fetch(url).then((res) => res.json())

const API_URL = "http://localhost:3000/api"
const PAGE_LIMIT = 100;

export function useCandle (segment: string) {
    const uri = segment ? `${API_URL}/${segment}` : `${API_URL}?limit=${PAGE_LIMIT}`
    const { data, error } = useSWR(uri, fetcher)

    return {
      user: data,
      isLoading: !error && !data,
      isError: error
    }
  }
