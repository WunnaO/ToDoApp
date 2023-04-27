// import { MainLayout } from "@/layout/MainLayout";
// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return (
//     <MainLayout>
//       <Component {...pageProps} />
//     </MainLayout>
//   );
// }

import { useEffect, useState } from "react";
import { MainLayout } from "@/layout/MainLayout";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default App;
