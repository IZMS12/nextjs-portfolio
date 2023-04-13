import React from 'react'

function Introduction() {
    return (
        <section className="bg-gray-900 text-white">
            <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        <span className="sm:block"> Lorem Ipsum </span>
                    </h1>

                    <p className="mx-auto pt-10 mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Introduction