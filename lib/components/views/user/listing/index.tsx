import React, { Dispatch, SetStateAction } from 'react'
import ProfileList from './table'
import { Profile } from '../../../../lib/types';
import { CiSearch } from 'react-icons/ci';
import { IoIosRefresh } from 'react-icons/io';

interface IProps {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
    filteredProfiles: Profile[];
    loading: boolean;
    error: string;
    handleSearch: () => void;
    handleRefresh: () => void;
    handleViewClick: (profile: Profile) => void;
    pages: number[]
    currentPage: number
    setCurrentPage: Dispatch<SetStateAction<number>>
}
const UserListingView = ({
    searchQuery,
    setSearchQuery,
    filteredProfiles,
    loading,
    error,
    handleSearch,
    handleRefresh,
    handleViewClick,
    pages,
    currentPage,
    setCurrentPage
}: IProps) => {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search by name, email, gender, or location"
                        className="w-full px-6 py-2 pl-12 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-600 text-gray-800"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-400" />
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={handleSearch}
                        className="flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-lg transition-transform hover:scale-105"
                    >
                        <CiSearch className="text-xl" />
                        <span className="hidden sm:inline">Search</span>
                    </button>

                    <button
                        onClick={handleRefresh}
                        className="flex items-center gap-2 px-6 py-2 bg-gray-500  text-white rounded-lg shadow-md transition-all"
                    >
                        <IoIosRefresh className="text-xl" />
                        <span className="hidden sm:inline">Reset</span>
                    </button>


                </div>
            </div>

            {error && <div className="text-red-500 mt-2">{error}</div>}

            <ProfileList profiles={filteredProfiles} loading={loading} handleViewClick={handleViewClick} />

            <div className="flex justify-center gap-2 mt-4 flex-wrap">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Previous
                </button>

                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 rounded ${page === currentPage ? "bg-blue-500 text-white" : "bg-gray-100"
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pages.length))}
                    disabled={currentPage === pages.length}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default UserListingView