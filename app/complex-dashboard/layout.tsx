import React from "react";

interface ComplexDashboardLayoutProps {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}

const ComplexDashboardLayout: React.FC<ComplexDashboardLayoutProps> = ({
  children,
  users,
  revenue,
  notifications,
}) => {
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
};

export default ComplexDashboardLayout;
