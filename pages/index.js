import { Footer, Title } from "@/components/App.style";
import MusicTiles from "@/components/MusicTiles";
import SettingModal from "@/components/SettingModal";

export default function Home() {
  return (
    <div>
      <SettingModal />
      <Title>
        Create your working <div>sounds</div>
      </Title>
      <MusicTiles />
      <Footer>
        <a href="https://github.com/riccardobertolini/lofi-music">
          Open Source project 💖 feel free to contribute
        </a>{" "}
        <br />
        using React18, TypeScript & Vite
      </Footer>
    </div>
  );
}
