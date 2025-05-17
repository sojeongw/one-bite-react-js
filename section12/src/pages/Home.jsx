import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [params, setParams] = useSearchParams();
  return <div>{params.get("value")}의 페이지입니다.</div>;
};

export default Home;
