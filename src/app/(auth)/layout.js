const AuthLayout = ({ children }) => {
  return (
    <div className="bg-primary-900 w-full h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
