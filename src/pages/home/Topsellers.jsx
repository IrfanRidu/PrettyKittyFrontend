import React, { useEffect, useState } from 'react'
import BookCard from '../../components/bookCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories=["Secect a genre","Business","Fiction","Horror","Advanture","Romance","Young adult"]

export default function Topsellers() {

    const {data:books=[]}=useFetchAllBooksQuery();
   

const [selectedCategory,setSelectedCategory]=useState("Secect a genre");

const filteredBooks= selectedCategory==="Secect a genre" ? books : books.filter(book=>book.category===selectedCategory.toLowerCase())



  return (
    <div className='py-10'>
      <h2 className='text-2xl font-semibold mb-6'>Top Sellers</h2>

     <div className='mb-8 flex items-center'>
<select onChange={(e)=>setSelectedCategory(e.target.value)} name='category' id='category' className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
{
categories.map((category,index)=>(<option key={index} value={category} defaultValue={index[0]}>{category}</option>))
}
</select>
</div>


<Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                   filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard  book={book} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>

   

    </div>
  )
}
