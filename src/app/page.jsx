"use client"
import HomeView from "@/views/Home/HomeView";
import {useGetProductsQuery} from "@/Redux/features/apiSlice" 
export default function Home() {
  const { data, error, isLoading } = useGetProductsQuery({})
  return (
 <>
 <HomeView/>
 </>
  );
}
