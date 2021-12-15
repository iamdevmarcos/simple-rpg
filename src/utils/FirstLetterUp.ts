export const FirstLetterUp = (playName: string) => {
    const firstLetter = playName.charAt(0).toUpperCase();
    return `${firstLetter}${playName.substr(1)}`;
}