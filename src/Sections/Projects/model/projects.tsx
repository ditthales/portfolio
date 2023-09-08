
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
                url: ""
            },
            {
                name: "Instagram",
                url: ""
            },
            {
                name: "TikTok",
                url: ""
            },
            {
                name: "Twitter",
                url: ""
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
                url: ""
            },
            {
                name: "Medium",
                url: ""
            },
            {
                name: "Website",
                url: ""
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
                url: ""
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
                url: ""
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
                url: ""
            },
        ]
    }

]