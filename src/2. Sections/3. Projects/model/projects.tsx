
export interface Project {
    name: string;
    tags: string[];
    img: string;
    video: string;
    links: {
        name: string;
        url: string;
    }[];
}

export const PROJECTS: Project[] = [
    {
        name: "Witchie",
        tags: ["Swift", "SwiftUI", "AVFoundations", "UserDefaults", "CI/CD"],
        video: "https://rr5---sn-gpv7yne7.c.drive.google.com/videoplayback?expire=1694624051&ei=A78BZcPoIae7xtYP7eC3gAc&ip=179.73.195.135&cp=QVROVkdfU1BTQlhPOmpzNzdJbWRydFFhaXhiUmlGN3VBOEx4NjAwNnpMSmcyaUVpeUhncDZiZWk&id=d09ce700ff52dd09&itag=37&source=webdrive&requiressl=yes&mh=Ae&mm=32&mn=sn-gpv7yne7&ms=su&mv=m&mvi=5&pl=20&ttl=transient&susc=dr&driveid=1kItwpz2Nv6iSeqqA6eqBruGpsfJOk_ed&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=60.418&lmt=1694612916989065&mt=1694612962&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAPum1k1-zWwBOc5Kc1la91QNSlaBbxgXm7W3-i9tBo3hAiA1AqzKrKZbe7sX3YH90FJsQz-8lUUvU6Tn_wr5asvTWQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgD99o-_MV66btSWE_T4QJ7m00QtTnJ0efj3cTL879grYCIQCv84NEVQC3XFLDNTleOjjubIDEiyHtDOtTe5rUNzvgGg==&cpn=UVos5-A1vCKRwtcC&c=WEB_EMBEDDED_PLAYER&cver=1.20230910.00.01",
        img: "https://i.imgur.com/9Rn1lAX.png",
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
        video: "https://rr5---sn-gpv7yne7.c.drive.google.com/videoplayback?expire=1694624051&ei=A78BZcPoIae7xtYP7eC3gAc&ip=179.73.195.135&cp=QVROVkdfU1BTQlhPOmpzNzdJbWRydFFhaXhiUmlGN3VBOEx4NjAwNnpMSmcyaUVpeUhncDZiZWk&id=d09ce700ff52dd09&itag=37&source=webdrive&requiressl=yes&mh=Ae&mm=32&mn=sn-gpv7yne7&ms=su&mv=m&mvi=5&pl=20&ttl=transient&susc=dr&driveid=1kItwpz2Nv6iSeqqA6eqBruGpsfJOk_ed&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=60.418&lmt=1694612916989065&mt=1694612962&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAPum1k1-zWwBOc5Kc1la91QNSlaBbxgXm7W3-i9tBo3hAiA1AqzKrKZbe7sX3YH90FJsQz-8lUUvU6Tn_wr5asvTWQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgD99o-_MV66btSWE_T4QJ7m00QtTnJ0efj3cTL879grYCIQCv84NEVQC3XFLDNTleOjjubIDEiyHtDOtTe5rUNzvgGg==&cpn=UVos5-A1vCKRwtcC&c=WEB_EMBEDDED_PLAYER&cver=1.20230910.00.01",
        img: "https://i.imgur.com/9Rn1lAX.png",
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
        video: "https://rr5---sn-gpv7yne7.c.drive.google.com/videoplayback?expire=1694624051&ei=A78BZcPoIae7xtYP7eC3gAc&ip=179.73.195.135&cp=QVROVkdfU1BTQlhPOmpzNzdJbWRydFFhaXhiUmlGN3VBOEx4NjAwNnpMSmcyaUVpeUhncDZiZWk&id=d09ce700ff52dd09&itag=37&source=webdrive&requiressl=yes&mh=Ae&mm=32&mn=sn-gpv7yne7&ms=su&mv=m&mvi=5&pl=20&ttl=transient&susc=dr&driveid=1kItwpz2Nv6iSeqqA6eqBruGpsfJOk_ed&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=60.418&lmt=1694612916989065&mt=1694612962&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAPum1k1-zWwBOc5Kc1la91QNSlaBbxgXm7W3-i9tBo3hAiA1AqzKrKZbe7sX3YH90FJsQz-8lUUvU6Tn_wr5asvTWQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgD99o-_MV66btSWE_T4QJ7m00QtTnJ0efj3cTL879grYCIQCv84NEVQC3XFLDNTleOjjubIDEiyHtDOtTe5rUNzvgGg==&cpn=UVos5-A1vCKRwtcC&c=WEB_EMBEDDED_PLAYER&cver=1.20230910.00.01",
        img: "https://i.imgur.com/9Rn1lAX.png",
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
        video: "https://rr5---sn-gpv7yne7.c.drive.google.com/videoplayback?expire=1694624051&ei=A78BZcPoIae7xtYP7eC3gAc&ip=179.73.195.135&cp=QVROVkdfU1BTQlhPOmpzNzdJbWRydFFhaXhiUmlGN3VBOEx4NjAwNnpMSmcyaUVpeUhncDZiZWk&id=d09ce700ff52dd09&itag=37&source=webdrive&requiressl=yes&mh=Ae&mm=32&mn=sn-gpv7yne7&ms=su&mv=m&mvi=5&pl=20&ttl=transient&susc=dr&driveid=1kItwpz2Nv6iSeqqA6eqBruGpsfJOk_ed&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=60.418&lmt=1694612916989065&mt=1694612962&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAPum1k1-zWwBOc5Kc1la91QNSlaBbxgXm7W3-i9tBo3hAiA1AqzKrKZbe7sX3YH90FJsQz-8lUUvU6Tn_wr5asvTWQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgD99o-_MV66btSWE_T4QJ7m00QtTnJ0efj3cTL879grYCIQCv84NEVQC3XFLDNTleOjjubIDEiyHtDOtTe5rUNzvgGg==&cpn=UVos5-A1vCKRwtcC&c=WEB_EMBEDDED_PLAYER&cver=1.20230910.00.01",
        img: "https://i.imgur.com/9Rn1lAX.png",
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
        video: "https://rr5---sn-gpv7yne7.c.drive.google.com/videoplayback?expire=1694624051&ei=A78BZcPoIae7xtYP7eC3gAc&ip=179.73.195.135&cp=QVROVkdfU1BTQlhPOmpzNzdJbWRydFFhaXhiUmlGN3VBOEx4NjAwNnpMSmcyaUVpeUhncDZiZWk&id=d09ce700ff52dd09&itag=37&source=webdrive&requiressl=yes&mh=Ae&mm=32&mn=sn-gpv7yne7&ms=su&mv=m&mvi=5&pl=20&ttl=transient&susc=dr&driveid=1kItwpz2Nv6iSeqqA6eqBruGpsfJOk_ed&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=60.418&lmt=1694612916989065&mt=1694612962&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAPum1k1-zWwBOc5Kc1la91QNSlaBbxgXm7W3-i9tBo3hAiA1AqzKrKZbe7sX3YH90FJsQz-8lUUvU6Tn_wr5asvTWQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgD99o-_MV66btSWE_T4QJ7m00QtTnJ0efj3cTL879grYCIQCv84NEVQC3XFLDNTleOjjubIDEiyHtDOtTe5rUNzvgGg==&cpn=UVos5-A1vCKRwtcC&c=WEB_EMBEDDED_PLAYER&cver=1.20230910.00.01",
        img: "https://i.imgur.com/9Rn1lAX.png",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/miggelucas/FarfaleDelas"
            },
        ]
    }

]