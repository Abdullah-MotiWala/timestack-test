
"use client";

import React, { useEffect, useState } from 'react'
import { Profile } from '../../lib/types';
import { useRouter } from 'next/router';
import { RESULTS_PER_PAGE, TOTAL_PAGES } from '../../lib/constants';
import { getErrorMessage } from '../../lib/helpers';
import { getData } from '../../lib/network';
import { useUser } from '../../context/UserContext';
import UserListingView from '../../lib/components/views/user/listing';

const User = () => {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState<string>("");

    const { setSelectedUser } = useUser();
    const router = useRouter();

    useEffect(() => {
        fetchProfiles(currentPage);
    }, [currentPage]);

    const fetchProfiles = async (pageNumber: number) => {
        setLoading(true);
        setError("");
        try {
            getData("", { page: pageNumber, results: RESULTS_PER_PAGE });
            const res = await getData("https://randomuser.me/api", {
                results: RESULTS_PER_PAGE,
                page: pageNumber,
            });
            if (res.status === "success") {
                const { data: newProfiles } = res
                setProfiles(newProfiles);
                setFilteredProfiles(newProfiles);
                setLoading(false);
            }
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            setError(errorMessage);
            setLoading(false);
        }
    }

    const handleSearch = () => {
        setLoading(true);
        const search = searchQuery.toLowerCase() || "";

        if (search) {

            const filtered = profiles.filter((profile) => {
                return (
                    profile?.name?.first?.toLowerCase().includes(search) ||
                    profile?.name?.last?.toLowerCase().includes(search) ||
                    profile?.email?.toLowerCase().includes(search) ||
                    profile?.phone?.toLowerCase().includes(search) ||
                    profile?.location?.city?.toLowerCase().includes(search) ||
                    profile?.location?.country?.toLowerCase().includes(search) ||
                    profile?.gender?.toLowerCase().includes(search)
                );
            });
            setFilteredProfiles(filtered || []);
        } else {
            setFilteredProfiles(profiles);
        }

        setLoading(false);
    };

    const handleRefresh = () => {
        setSearchQuery("");
        fetchProfiles(currentPage);
    };
    const handleViewClick = (user: Profile) => {
        setSelectedUser(user);
        router.push(`/${user.login.uuid}`);
    };

    const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);

    return (
        <UserListingView
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredProfiles={filteredProfiles}
            loading={loading}
            error={error}
            handleSearch={handleSearch}
            handleRefresh={handleRefresh}
            handleViewClick={handleViewClick}
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
    )
}

export default User