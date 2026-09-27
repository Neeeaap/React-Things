import { useRouter } from "next/router";

function NewsDetailPage() {
  const router = useRouter();
  const { newsId } = router.query;

  return <h1>{newsId} Detail Page</h1>;
}

export default NewsDetailPage;
