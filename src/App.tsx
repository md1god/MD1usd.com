import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalAudioPlayer from './components/GlobalAudioPlayer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Tokenomics = lazy(() => import('./pages/Tokenomics'));
const Security = lazy(() => import('./pages/Security'));
const Whitepaper = lazy(() => import('./pages/Whitepaper'));
const Roadmap = lazy(() => import('./pages/Roadmap'));
const DeFi101 = lazy(() => import('./pages/DeFi101'));
const IslamicFinance = lazy(() => import('./pages/IslamicFinance'));
const BlockchainBasics = lazy(() => import('./pages/BlockchainBasics'));
const SmartContracts = lazy(() => import('./pages/SmartContracts'));
const WalletGuide = lazy(() => import('./pages/WalletGuide'));
const SecurityBestPractices = lazy(() => import('./pages/SecurityBestPractices'));
const GlossaryTerms = lazy(() => import('./pages/GlossaryTerms'));
const EthereumNetwork = lazy(() => import('./pages/EthereumNetwork'));
const PolygonNetwork = lazy(() => import('./pages/PolygonNetwork'));
const BNBNetwork = lazy(() => import('./pages/BNBNetwork'));
const SolanaNetwork = lazy(() => import('./pages/SolanaNetwork'));
const NetworkComparison = lazy(() => import('./pages/NetworkComparison'));
const Community = lazy(() => import('./pages/Community'));
const Ambassadors = lazy(() => import('./pages/Ambassadors'));
const Events = lazy(() => import('./pages/Events'));
const Governance = lazy(() => import('./pages/Governance'));
const Voting = lazy(() => import('./pages/Voting'));
const WallOfBelievers = lazy(() => import('./pages/WallOfBelievers'));
const Blog = lazy(() => import('./pages/Blog'));
const News = lazy(() => import('./pages/News'));
const Announcements = lazy(() => import('./pages/Announcements'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const MediaKit = lazy(() => import('./pages/MediaKit'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Support = lazy(() => import('./pages/Support'));
const Troubleshooting = lazy(() => import('./pages/Troubleshooting'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const BugBounty = lazy(() => import('./pages/BugBounty'));
const Partnerships = lazy(() => import('./pages/Partnerships'));
const Integrations = lazy(() => import('./pages/Integrations'));
const APIDocumentation = lazy(() => import('./pages/APIDocumentation'));
const DeveloperResources = lazy(() => import('./pages/DeveloperResources'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const About = lazy(() => import('./pages/About'));

import './styles/globals.css';

// Loading component
const LoadingComponent = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">جاري التحميل...</p>
    </div>
  </div>
);

// يعيد الصفحة لأعلى تلقائياً عند كل تنقل بين الصفحات (React Router لا يفعل هذا افتراضياً)
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// مكوّن داخلي يحتاج الوصول لـ useLocation، لذا يجب أن يكون داخل <Router>
const AppShell: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <GlobalAudioPlayer />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingComponent />}>
            <Routes>
              {/* Basic Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/tokenomics" element={<Tokenomics />} />
              <Route path="/security" element={<Security />} />
              <Route path="/whitepaper" element={<Whitepaper />} />
              <Route path="/roadmap" element={<Roadmap />} />

              {/* Education Pages */}
              <Route path="/learn/defi-101" element={<DeFi101 />} />
              <Route path="/learn/islamic-finance" element={<IslamicFinance />} />
              <Route path="/learn/blockchain-basics" element={<BlockchainBasics />} />
              <Route path="/learn/smart-contracts" element={<SmartContracts />} />
              <Route path="/learn/wallet-guide" element={<WalletGuide />} />
              <Route path="/learn/security-best-practices" element={<SecurityBestPractices />} />
              <Route path="/learn/glossary" element={<GlossaryTerms />} />

              {/* Network Pages */}
              <Route path="/networks/ethereum" element={<EthereumNetwork />} />
              <Route path="/networks/polygon" element={<PolygonNetwork />} />
              <Route path="/networks/bnb" element={<BNBNetwork />} />
              <Route path="/networks/solana" element={<SolanaNetwork />} />
              <Route path="/networks/comparison" element={<NetworkComparison />} />

              {/* Community Pages */}
              <Route path="/community" element={<Community />} />
              <Route path="/community/ambassadors" element={<Ambassadors />} />
              <Route path="/community/events" element={<Events />} />
              <Route path="/community/governance" element={<Governance />} />
              <Route path="/community/voting" element={<Voting />} />
              <Route path="/community/believers" element={<WallOfBelievers />} />

              {/* Blog & News */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/news" element={<News />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/media-kit" element={<MediaKit />} />

              {/* Support Pages */}
              <Route path="/support/faq" element={<FAQ />} />
              <Route path="/support" element={<Support />} />
              <Route path="/support/troubleshooting" element={<Troubleshooting />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/bug-bounty" element={<BugBounty />} />

              {/* Developer Pages */}
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/developers/api" element={<APIDocumentation />} />
              <Route path="/developers/resources" element={<DeveloperResources />} />

              {/* Dashboard */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppShell />
    </Router>
  );
};

export default App;
