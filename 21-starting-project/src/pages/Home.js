import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        This is the home page. You can navigate to the products page{" "}
        <Link to="products">here</Link>.
      </p>
    </>
  );
}

export default Home;
