// dynamic page

import { useRouter } from "next/router";

// http://localhost:3000/anotherpage/newsId

function Dynamic() {

  const router = useRouter();

  const newsId = router.query.newsId; //get dynamic parameter from browser url

  return <h1>The Dynamic page</h1>
}

export default Dynamic;