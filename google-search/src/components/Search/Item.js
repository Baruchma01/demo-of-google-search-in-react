import { useLocation } from "react-router-dom";

export const Item = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  return <div style={{ textAlign: "center" }}>Item ID IS {query}</div>;
};
