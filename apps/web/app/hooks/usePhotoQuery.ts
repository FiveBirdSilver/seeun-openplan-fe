import axios from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export interface PhotoInfo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetchData = async (): Promise<PhotoInfo> => {
  try {
    const response = await axios.get<PhotoInfo>(API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch photo data');
    }
    throw error;
  }
};

export const usePhotoQuery = (
  enabled: boolean = true,
  options?: Omit<UseQueryOptions<PhotoInfo, Error>, 'queryKey' | 'queryFn' | 'enabled'>
) => {
  return useQuery<PhotoInfo>({
    queryKey: ['photoInfo'],
    queryFn: fetchData,
    staleTime: 5 * 60 * 1000, 
    retry: 1, 
    enabled, 
    ...options, 
  });
};