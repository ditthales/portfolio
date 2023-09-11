import { useTranslation } from "react-i18next"


const TextAboutMe = () => {

    const { t } = useTranslation()

    const texto1 = t('text_about_me1'); // Substitua t('text_about_me1') pela maneira como você obtém o texto do JSON

    // Divide o texto em duas partes: antes e depois do link
    const textoAntesDoLink1 = texto1.split('(@appledeveloperacademy.ufpe)')[0];
    const textoDepoisDoLink1 = texto1.split('(@appledeveloperacademy.ufpe)')[1];
    

    const texto3 = t('text_about_me3'); // Substitua t('text_about_me1') pela maneira como você obtém o texto do JSON

    // Divide o texto em duas partes: antes e depois do link
    const textoAntesDoLink3 = texto3.split(t('aqui'))[0];
    const textoDepoisDoLink3 = texto3.split(t('aqui'))[1];

    return(
        <div className="flex flex-row gap-[10px]">
            <div className="w-[10px] bg-black"></div>
            <div className="flex flex-col gap-[10px]">
                <p className="text-[14px]">
                    {textoAntesDoLink1}
                    <a className="text-[#2E64C1] underline" href="https://www.instagram.com/appledeveloperacademy.ufpe/" target="_blank">
                        (@appledeveloperacademy.ufpe)
                    </a>
                    {textoDepoisDoLink1}
                </p>
                <p className="text-[14px]">{t('text_about_me2')}</p>
                <p className="text-[14px]">
                    {textoAntesDoLink3}
                    <a className="text-[#2E64C1] underline" href="https://youtu.be/GjBk_YC-9P8" target="_blank">
                        {t('aqui')}
                    </a>
                    {textoDepoisDoLink3}
                </p>
            </div>
        </div>
    )
}

export default TextAboutMe