import { Link, useParams } from "react-router-dom";

function ProductInfo() {
  const params = useParams();

  return (
    <>
      <h1>Product Info</h1>
      <p>{params.id}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductInfo;
