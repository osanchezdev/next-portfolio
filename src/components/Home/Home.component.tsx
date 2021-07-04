import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import WelcomeSection from "./WelcomeSection/WelcomeSection.component";

const Home: React.FC = () => {
  return (
    <Scrollbars style={{ height: "100vh" }} universal={true}>
      <WelcomeSection />
      <div>
        Non dolorem illo. Tempora amet et perspiciatis dolorum culpa alias
        repudiandae. Ut dolorem minus nihil iste itaque aut excepturi inventore
        illo. Velit nesciunt ipsa porro harum quia earum. Sunt aut rerum earum
        eos. Quidem aut assumenda rerum magni dolor sed. Voluptates reiciendis
        odit. Amet eaque dolores numquam maxime eligendi. Ex autem eum
        consequatur dolores quo. Mollitia harum est eum dolorum minus. Animi
        laudantium eos doloremque dolorem et. Quo nemo dolor quo id laborum quas
        molestias occaecati. Vel sit et corporis eum eligendi ea fugiat ipsa. Et
        aut autem. Et minus vitae fugiat sequi aut voluptatibus.
      </div>
    </Scrollbars>
  );
};

export default Home;
