

// export const getSelectTheme = (theme) => {
//   return ({
//     /*
//     * multiValue(remove)/color:hover
//     */
//     danger: 'purple',

//     /*
//      * multiValue(remove)/backgroundColor(focused)
//      * multiValue(remove)/backgroundColor:hover
//      */
//     dangerLight: theme.palette.grey[200],

//     /*
//      * control/backgroundColor
//      * menu/backgroundColor
//      * option/color(selected)
//      */
//     neutral0: theme.palette.background.default,

//     /*
//       * control/backgroundColor(disabled)
//      */
//     neutral5: "orange",

//     /*
//      * control/borderColor(disabled)
//      * multiValue/backgroundColor
//      * indicators(separator)/backgroundColor(disabled)
//      */
//     neutral10: 'pink',

//     /*
//      * control/borderColor
//      * option/color(disabled)
//      * indicators/color
//      * indicators(separator)/backgroundColor
//      * indicators(loading)/color
//      */
//     neutral20: theme.palette.grey['A200'],

//     /*
//      * control/borderColor(focused)
//      * control/borderColor:hover
//      */
//     // this should be the white, that's normally selected
//     neutral30: theme.palette.text.primary,

//     /*
//      * menu(notice)/color
//      * singleValue/color(disabled)
//      * indicators/color:hover
//      */
//     neutral40: 'green',

//     /*
//      * placeholder/color
//      */
//     // seen in placeholder text
//     neutral50: theme.palette.grey['A200'],

//     /*
//      * indicators/color(focused)
//      * indicators(loading)/color(focused)
//      */
//     neutral60: 'purple',
//     neutral70: 'purple',

//     /*
//      * input/color
//      * multiValue(label)/color
//       * singleValue/color
//      * indicators/color(focused)
//      * indicators/color:hover(focused)
//      */
//     neutral80: theme.palette.text.primary,

//     // no idea
//     neutral90: "pink",

//     /*
//      * control/boxShadow(focused)
//      * control/borderColor(focused)
//      * control/borderColor:hover(focused)
//      * option/backgroundColor(selected)
//      * option/backgroundColor:active(selected)
//      */
//     primary: theme.palette.text.primary,

//     /*
//      * option/backgroundColor(focused)
//      */
//     primary25: theme.palette.background.dark,

//     /*
//      * option/backgroundColor:active
//      */
//     primary50: theme.palette.background.paper,
//     primary75: theme.palette.background.paper,
//   })}

export const colourStyles = {

  control: (styles, { isFocused }) => ({
    ...styles,
    // theme={theme => ({
    //   ...theme,
    //   colors: {
    //     ...formThemeColors
    //   }})},
    background: '#161f37',
    // background: ({ theme }) => theme.searchBackground},
    width: '335px',
    height: '54px',
    borderRadius: '20px',
    borderStyle: 'none',
    color: '#f3f3f3',
    borderColor: isFocused ? 'orange' : 'grey',
    "@media only screen and (min-width: 768px)": {
      width: '199px',
      height: '56px',
  },
    "@media only screen and (min-width: 1440px)": {
      width: '199px',
      height: '56px',
  },

  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    background: 'none',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: '#f3f3f3',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0em',
    textAlign: 'center',
  }),
  input: (styles) => ({
    ...styles,
    color: '#f3f3f3',
    fontFamily: 'Manrope',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0em',
    textAlign: 'center',
  }),
  menuList: (styles) => ({
    ...styles,
    background: '#161f37',
    borderRadius: '20px',
    // width: '199px',
    // height: '405px',
    padding: '14px 23px',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    background: isFocused ? '#161f37' : isSelected ? '#4f5f88' : undefined,
    zIndex: 1,
    color: '#f3f3f3',
    fontFamily: 'Manrope',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0em',
    borderRadius: '20px',
  }),
  menu: (base) => ({
    ...base,
    zIndex: 100,
    borderRadius: '20px',
  }),
};
