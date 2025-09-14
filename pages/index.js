import AuthorPortfolio from "../components/screen/author-portfolio";
import ReactGA from 'react-ga4';
import Meta from "../components/SEO/Meta";


const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;
if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
}

function App() {
  return (
    <>
      <Meta />
      <AuthorPortfolio />
    </>
  )
}

export default App;
