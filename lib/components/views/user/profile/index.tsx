import React from 'react'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import { Profile } from '../../../../lib/types';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

interface IProps {
    user: Profile
    genderChipClass: string
}
const ProfileView = ({ user, genderChipClass }: IProps) => {
    const router = useRouter();


    return (<motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
    >
        <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-bold text-foreground drop-shadow-xl">
                User View
            </h1>
            <button
                onClick={() => router.back()}
                className="bg-gradient-to-r bg-gray-500  text-white px-5 py-2 rounded-lg text-sm font-medium shadow-md hover:scale-105 transition-all duration-300"
            >
                ← Back
            </button>
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
            <div className="relative w-40 h-40 rounded-full border-4 border-transparent bg-gradient-to-tr from-cyan-400 to-purple-400 p-1 shadow-xl transform hover:scale-110 transition-all duration-300">
                <img
                    src={user.picture.large}
                    alt="User Profile"
                    className="w-full h-full rounded-full object-cover absolute top-0 left-0 shadow-2xl z-10"
                />
            </div>

            <div className="flex-1 text-foreground space-y-1">
                <h2 className="text-3xl font-bold">
                    {user.name.first} {user.name.last}
                </h2>
                <p className="text-gray-700">@{user.login.username}</p>
                <p className="text-gray-700">{user.email}</p>
                <p className="text-gray-700">{user.phone}</p>

                <div className="flex flex-wrap gap-3 mt-4">
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold shadow-sm  ${genderChipClass}`}>
                        {user.gender.toUpperCase()}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-semibold">
                        Age: {user.dob.age}
                    </span>

                </div>
            </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/40 backdrop-blur-xl border border-white/30 text-foreground p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-2 ">
                    <FiMapPin /> Location
                </h3>
                <p>{user.location.street.number} {user.location.street.name}</p>
                <p>{user.location.city}, {user.location.state}</p>
                <p>{user.location.country} - {user.location.postcode}</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/40 backdrop-blur-xl border border-white/30 text-foreground p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                    <FiCalendar /> Other Info
                </h3>
                <p>
                    <strong >DOB:</strong>{" "}
                    {new Date(user.dob.date).toDateString()}
                </p>
                <p>
                    <strong >Registered:</strong>{" "}
                    {new Date(user.registered.date).toDateString()}
                </p>
                <p>
                    <strong >Nationality:</strong> {user.nat}
                </p>
            </motion.div>
        </div>
    </motion.div>

    )
}

export default ProfileView