export enum LanguageCodes{
    English = 'en',
    Arabic = 'ar'
}


export const Languages : Record<LanguageCodes , string>={
    [LanguageCodes.English]:"English",
    [LanguageCodes.Arabic]:"Arabic",
}

export const DEFAULT_LANGUAGE = LanguageCodes.English