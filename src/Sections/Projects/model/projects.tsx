
export interface Project {
    name: string;
    tags: string[];
    img: string;
    links: {
        name: string;
        url: string;
    }[];
}

export const PROJECTS: Project[] = [
    {
        name: "Witchie",
        tags: ["Swift", "SwiftUI", "AVFoundations", "UserDefaults", "CI/CD"],
        img: "witchie.png",
        links: [
            {
                name: "App Store",
                url: "https://apps.apple.com/br/app/witchie/id6454296859"
            },
            {
                name: "Instagram",
                url: "https://instagram.com/playwitchie?igshid=MzRlODBiNWFlZA=="
            },
            {
                name: "TikTok",
                url: "https://www.tiktok.com/@playwitchie"
            },
            {
                name: "Twitter",
                url: "https://x.com/playwitchie?s=11"
            }
        ]
    },
    {
        name: "In a Sheet of Paper",
        tags: ["Swift", "SwiftUI", "AVFoundations", "WWDC Winner", "Pencil Kit"],
        img: "witchie.png",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/ditthales/InASheetOfPaper"
            },
            {
                name: "Medium",
                url: "https://medium.com/p/97592aa9a670"
            },
            {
                name: "Website",
                url: "https://www.wwdcscholars.com/s/ED32639C-D086-4472-8438-2778B87FB1B0/2023"
            },
        ]
    },
    {
        name: "Receitinha",
        tags: ["Swift", "UIKit", "viewcode", "AVFoundations", "UserDefaults"],
        img: "witchie.png",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/gabrielfelipo/Receitinha"
            },
        ]
    },
    {
        name: "Naturia",
        tags: ["Swift", "SwiftUI", "PencilKit", "iPad"],
        img: "witchie.png",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/miggelucas/Naturia"
            },
        ]
    },
    {
        name: "Your Time",
        tags: ["Swift", "SwiftUI", "MacOS"],
        img: "witchie.png",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/miggelucas/FarfaleDelas"
            },
        ]
    }

]