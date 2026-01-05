import React from "react";

interface ComplexDashboardLayoutProps {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login?: React.ReactNode;
}

const ComplexDashboardLayout: React.FC<ComplexDashboardLayoutProps> = ({
  children,
  users,
  revenue,
  notifications,
  login,
}) => {
  const isLoggedIn = false; // Replace with actual authentication logic
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div>
        {users}
        {revenue}
        {notifications}
      </div>
    </div>
  ) : (
    <div>{login}</div>
  );
};

export default ComplexDashboardLayout;
