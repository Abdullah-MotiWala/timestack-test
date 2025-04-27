import React from "react";
import { Profile } from "../../../../lib/types";
import Spinner from "../../../shared/Spinner";
import UserRow from "./userRow";

const ProfileList = ({
  profiles,
  loading,
  handleViewClick,
}: {
  profiles: Profile[];
  loading: boolean;
  handleViewClick: Function;
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="inline-block min-w-[1100px] bg-gradient-to-r from-primary to-accent shadow-lg rounded-xl overflow-hidden">
        <table className="w-full table-auto whitespace-nowrap">
          <thead className="bg-primary text-white text-sm">
            <tr>
              <th className="px-6 py-4 text-left border-r border-primary-light">Profile</th>
              <th className="px-6 py-4 text-left border-r border-primary-light">Full Name</th>
              <th className="px-6 py-4 text-left border-r border-primary-light">Email Address</th>
              <th className="px-6 py-4 text-left border-r border-primary-light">Contact Number</th>
              <th className="px-6 py-4 text-left border-r border-primary-light">Country</th>
              <th className="px-6 py-4 text-left border-r border-primary-light">Gender</th>
              <th className="px-6 py-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody className="text-foreground text-sm divide-y divide-muted bg-background">
            {loading ? (
              <tr>
                <td colSpan={7} className="text-center py-6">
                  <Spinner />
                </td>
              </tr>
            ) : (profiles.length ? (
              profiles.map((profile, i) => (
                <UserRow
                  key={profile.email}
                  profile={profile}
                  handleViewClick={handleViewClick}
                />
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-6 text-muted">
                  No profiles found
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileList;
