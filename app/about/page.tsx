export const metadata = {
  title: "About Page",
  description: "This is the about page of our Next.js tutorial",
};

const page = () => {
  return <div> this is the about page {new Date().toLocaleTimeString()}</div>;
};

export default page;
