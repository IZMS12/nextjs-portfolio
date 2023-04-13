import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import contactOptions from './contactInfo.js'
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row text-teal-600">
                <Link href="/" className="flex items-center">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="ml-1 text-xl font-bold tracking-wide text-white">110</span>
                </Link>

                <p className="text-sm text-gray-600 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>

                <div className="flex -mx-2">
                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="LinkdIn" >
                        <a href={contactOptions.linkedin} target="_blank" rel="www.linkedin.com/in/emily-teng-774397255">

                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none">
                                <LinkedInIcon />
                            </svg>

                        </a>
                    </a>

                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Email" >
                        <a href={`mailto:${contactOptions.email}`}>
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none">
                                <EmailIcon />
                            </svg>
                        </a>
                    </a>  
                </div>
            </div>
        </footer>

    )
}

export default Footer
