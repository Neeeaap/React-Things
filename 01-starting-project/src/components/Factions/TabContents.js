// Icons
import kingdomEtreaIcon from "../../assets/FactionIcons/Etrea_Icon.webp";
import centralAuthorityIcon from "../../assets/FactionIcons/The_Central_Authority_Icon.webp";
import summerCompanyIcon from "../../assets/FactionIcons/The_Summer_Company_Icon.webp";
import ignitionUnionIcon from "../../assets/FactionIcons/The_Ignition_Union_Icon.webp";
import theHiveIcon from "../../assets/FactionIcons/The_Hive_Icon.webp";
import theMinistryIcon from "../../assets/FactionIcons/The_Ministry_Icon.webp";
import childrenNavaeIcon from "../../assets/FactionIcons/Children_of_Navae_Icon.webp";
//import lostCeltorIcon from "../../assets/FactionIcons/Lost_Celtor_Icon.webp";

export const TABS = [
    { id: "kingdomEtrea", label: "Kingdom of Etrea" },
    { id: "centralAuthority", label: "The Central Authority" },
    { id: "summerCompany", label: "Summer Company" },
    { id: "ignitionUnion", label: "Ignition Union" },
    { id: "theHive", label: "The Hive" },
    { id: "theMinistry", label: "The Ministry" },
    { id: "childrenNavae", label: "Children of Navae" },
    // { id: "lostCeltor", label: "Lost Celtor" },
]

export const TAB_CONTENTS = {
    kingdomEtrea: {
        title: "Kingdom of Etrea",
        description: `Etrea, also known as the Kingdom of Etrea, is a nation of primarily Etreans that are the main ruling faction in the Etrean Luminant. They reside in their capital of Etris.
        \nThe Isle of Vigils is also part of Etrea, acting as its military school, though Etrea's attitude toward the Isle is much more hands-off.
        \nBeing the largest land ruling faction in the Etrean Luminant, they hold a large range of power, deploying foot-soldiers all across the Etrean Luminant. They are led by the Lord Regent who rules from his castle, and sees over the land of Etris and the Etrean Wilds. They had been ruled by their Kings for generations, until decades to months before the year 1271, when the new leader Lord Regent took over. `,
        icon: kingdomEtreaIcon,
    },
    centralAuthority: {
        title: "The Central Authority",
        description: `The Central Authority (frequently referred to as simply "The Authority") is a large military organization native to the Central Luminant. 
                        \nFounded in 65 BCE by the remains of the Adretian Empire as a coalition of nations, the Authority's goal is global unity. In practice, the Authority is a militaristic, authoritarian, and expansionist regime, far more imperialist than the empires it opposes. The empire is led by a mysterious individual named Drallis Ehr, who reigns as Grand Sovereign. However, Drallis Ehr's identity is debated, and some believe he may not actually exist.
                        \nThe Authority is the main enemy of the Kingdom of Etrea, having considered them a foe long before The Lord Regent hijacked the nation.`,
        icon: centralAuthorityIcon,
    },
    summerCompany: {
        title: "Summer Company",
        description: `The Summer Company is a faction that operates in their fortified island, the Summer Isle in The Aratel Sea.
                        \nAs their name implies, they are a merchant Company that is the overworld's chief supplier and manufacturer of firearms and ammunition.
                        \nAs mentioned in the flavour text for the Flintlock, the Summer Company was founded when a blacksmith originating from the Etrean Luminant returned from his trip abroad, bringing with him the technologies of a foreign land, mainly - the gun, or the common firearm. `,
        icon: summerCompanyIcon,
    },
    ignitionUnion: {
        title: "Ignition Union",
        description: `The Ignition Union is a faction found primarily throughout the Eastern Luminant and The Depths. They are a renowned freelancer company and labor union that specializes in trade, technology, R&D, and Depths exploration.
                        \nDuring the Etrean Civil War, the Union attacked the Etrean Royalists' forces in order to claim their land for their own. They converted the area into the mountainous Miner's Landing, located in the Eastern Luminant. 
                        \nAdditionally, they have established two field bases in the Depths: The Chariot's Spire in Scyphozia and The Frontier Furnace in the first floor of the Eternal Gale. `,
        icon: ignitionUnionIcon,
    },
    theHive: {
        title: "The Hive",
        description: `The Hive is a faction that operates within large trees known as Greathives. An example of these is the relatively new Greathive Aratel, which is located in the upper north of Aratel Island. It can only be accessed through washing your face in the Lightkeeper Temple before using the shrine teleporter.
                    \nThe Hive was founded by the ancestors of the Vesperians and Ganymedes. They are ruled by an overarching Greatlord who delegates the management of each Greathive to their respective Hivelords. Statues of them have been built in honor at the entrance of The Lordsgrove to commemorate their efforts in creating and advancing the Hive. `,
        icon: theHiveIcon,
    },
    theMinistry: {
        title: "The Ministry",
        description: `The Ministry is a group of mysterious users of Shadowcast who seek to cause Great Drownings in order to achieve Godhood. 
                    \nThey are led by the Nine Prophets, with the First Prophet being the strongest mortal alive, the Second Prophet being the one who pioneered Bloodrend and spread it to their followers in the form of an Oath, and the Fourth, Zi'eer, being the current Lord Regent of Etrea. 
                    \nThey have some sort of hostility against The Children of Navae and desire to clear them out of Summer Isle, presumably due to The Children of Navae's allegiance with a Celestial, Navae, while the Ministry seeks the favor of the Drowned Gods. This is a rather one-sided rivalry. 
                    \nThe exact time of their founding is unclear, but by 1272, the original incarnation of the Ministry who had fought to conquer Minityrsa were considered ancient.`,
        icon: theMinistryIcon,
    },
    childrenNavae: {
        title: "Children of Navae",
        description: `A mainly nomadic tribe mostly containing Gremor who worship and are guided by Navae.`,
        icon: childrenNavaeIcon,
    }
}