"use client"
import { useParams } from "next/navigation"
import React from 'react'

export default function Page() { // Renamed from "page" to "Page"
    const { slug } = useParams()
    const {
        data: productData,
        isFetching,
        isLoading
      } = useGetProductQuery(
        {
          id: slug
        },
        { refetchOnMountOrArgChange: true }
      )
    console.log(slug)
    return (
        <div>
          
        </div>
    )
}
