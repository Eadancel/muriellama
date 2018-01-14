import Typography from "typography";

const typography = new Typography({ 
    baseFontSize: '24px',
    baseLineHeight: 1.45,
    googleFonts: [
        {
          name: 'Oxygen Mono',
          styles: [
            'normal',
          ],
        }],
    headerFontFamily: ['Oxygen Mono', 'monospace'],
    bodyFontFamily: ['Oxygen Mono', 'monospace'],
    headerWeight:'normal',
 });

export default typography;