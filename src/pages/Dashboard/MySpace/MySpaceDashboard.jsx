import React from "react";
import {
  Favorites,
  NewHires,
  Birthday,
  QuickLinks,
  EmployeeEngagement,
  WorkAnniversary,
  WeddingAnniversary,
  Announcements,
  LeaveReport,
  UpcomingHolidays,
  MyPendingTasks,
  LeaveOnToday,
} from "../../../components";

export default function MySpaceDashboard() {
  return (
    <div className="w-full h-full grid gap-4 grid-cols-3 justify-center items-center place-content-center place-items-center place-self-center">
      <Favorites />
      <NewHires />
      <Birthday />
      <QuickLinks />
      <EmployeeEngagement />
      <WorkAnniversary />
      <WeddingAnniversary />
      <Announcements />
      <LeaveReport />
      <UpcomingHolidays />
      <MyPendingTasks />
      <LeaveOnToday />
    </div>
  );
}
