interface UserIdPageProps {
  params: {
    userId: string;
  };
}

const Page = ({ params }: UserIdPageProps) => {
  return <div>User id is {params.userId}</div>;
};

export default Page;
