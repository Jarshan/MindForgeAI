// using prebuilt website 

import { assets } from "../assets/assets"


// const Testimonial = () => {
//     const testimonials = [
//         { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!" },
//         { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!" },
//         { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results." }
//     ];

//     const Star = ({ filled }) => (
//         <svg className="w-4 h-4 text-yellow-400" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z" />
//         </svg>
//     );

//     return (
//         <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 pt-20 pb-30">
//             <div className="flex flex-col justify-center items-center text-center">
//                 <h1 className="text-4xl md:text-[40px] font-bold">Customer Testimonials</h1>
//                 <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-[696px]">Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review.</p>
//             </div>

//             <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
//                 {testimonials.map((testimonial) => (
//                     <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow max-w-xs">
//                         <div className="flex items-center gap-3">
//                             <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
//                             <div>
//                                 <p className="font-playfair text-xl">{testimonial.name}</p>
//                                 <p className="text-gray-500">{testimonial.address}</p>
//                             </div>
//                         </div>
//                         <div className="flex items-center gap-1 mt-4">
//                             {Array(5).fill(0).map((_, index) => (
//                                 <Star key={index} filled={testimonial.rating > index} />
//                             ))}
//                         </div>
//                         <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Testimonial

const Testimonial = () => {
    const dummyTestimonialData = [
        {
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            name: 'John Doe',
            title: 'Marketing Director, TechCorp',
            content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
            rating: 4,
        },
        {
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            name: 'Jane Smith',
            title: 'Content Creator, TechCorp',
            content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
            name: 'David Lee',
            title: 'Content Writer, TechCorp',
            content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
            rating: 4,
        },
    ]

    return (
        <div className='px-4 sm:px-20 xl:px-32 py-24'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Loved by Creators</h2>
                <p className='text-gray-500 max-w-lg mx-auto'>Don't just take our word for it. Here's what our users are saying.</p>
            </div>
            <div className='flex flex-wrap mt-10 justify-center'>
                {dummyTestimonialData.map((testimonial, index) => (
                    <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer'>
                        <div className="flex items-center gap-1">
                            {Array(5).fill(0).map((_, index)=> (<img key={index} src={index < testimonial.rating ? assets.star_icon :
                                assets.star_dull_icon } className="w-4 h-4 " alt="star"/>))}
                        </div>
                        <p className='text-gray-500 text-sm my-5'>"{testimonial.content}"</p>
                        <hr className='mb-5 border-gray-300' />
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} className='w-12 object-contain rounded-full' alt='' />
                            <div className='text-sm text-gray-600'>
                                <h3 className='font-medium'>{testimonial.name}</h3>
                                <p className='text-xs text-gray-500'>{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial