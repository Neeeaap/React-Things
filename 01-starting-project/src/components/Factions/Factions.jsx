import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Tab from "./Tab.jsx";
import { TAB_CONTENTS, TABS } from "./TabContents.js";

let tabContent = (
  <div id="tab-content">
    <img
      key={TAB_CONTENTS[selectedFaction].title}
      src={TAB_CONTENTS[selectedFaction].icon}
    />
    <h3>{TAB_CONTENTS[selectedFaction].title}</h3>
    <p>{TAB_CONTENTS[selectedFaction].description}</p>
  </div>
);

export default function Factions() {
  const [selectedFaction, setSelectedFaction] = useState("kingdomEtrea");

  function clickHandler(selectedButton) {
    setSelectedFaction(selectedButton);
  }

  return (
    <section id="factions">
      <h2>FACTIONS</h2>
      <Tab
        buttons={
          <>
            {TABS.map((tab) => (
              <TabButton
                key={tab.id}
                label={tab.label}
                isSelected={selectedFaction === tab.id}
                onClick={() => clickHandler(tab.id)}
              />
            ))}
          </>
        }
      >
        {tabContent}
      </Tab>
    </section>
  );
}
