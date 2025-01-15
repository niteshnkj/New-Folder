import { ChatIconSvg, QueryIconSvg, SocialIconSvg } from "./assets/svg/Svg";
import Accordion from "./components/Accordion";
import ChatIcons from "./components/ChatIcons";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import QueryForm from "./components/QueryForm";
import SocialIcons from "./components/SocialIcons";

function App() {
  const accordionItems = [
    {
      title: "Chat",
      subtitle: "Lorem ipsum doolor sit amet",
      logo: <ChatIconSvg />,
      content: <ChatIcons />,
    },
    {
      title: "Social",
      subtitle: "Lorem ipsum doolor sit amet",
      logo: <SocialIconSvg />,
      content: <SocialIcons />,
    },
    {
      title: "Send Query",
      subtitle: "Lorem ipsum doolor sit amet",
      logo: <QueryIconSvg />,
      content: <QueryForm />,
    },
  ];
  return (
    <>
      <Navbar />
      <HeroSection />
      <Accordion items={accordionItems} />
    </>
  );
}

export default App;
