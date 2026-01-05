import React from "react";

const ComplexDashboardLayout = ({ children, users, revenue, notifications }
  
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
})  {
  return (
    <div>
    <div>{children}</div>
    <div>
      {users}
      {revenue}
      {notifications}
  </div>
  </div>
);

export default ComplexDashboardLayout;
