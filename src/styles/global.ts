import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/roboto-v20-latin-300.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v20-latin-300.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v20-latin-300.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/roboto-v20-latin-300.woff')
        format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v20-latin-300.ttf')
        format('truetype'),
      /* Safari, Android, iOS */ url('/fonts/roboto-v20-latin-300.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/roboto-v20-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v20-latin-regular.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v20-latin-regular.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/roboto-v20-latin-regular.woff')
        format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v20-latin-regular.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v20-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  /* roboto-500 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/roboto-v20-latin-500.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v20-latin-500.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v20-latin-500.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/roboto-v20-latin-500.woff')
        format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v20-latin-500.ttf')
        format('truetype'),
      /* Safari, Android, iOS */ url('/fonts/roboto-v20-latin-500.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* roboto-700 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/roboto-v20-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v20-latin-700.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v20-latin-700.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/roboto-v20-latin-700.woff')
        format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v20-latin-700.ttf')
        format('truetype'),
      /* Safari, Android, iOS */ url('/fonts/roboto-v20-latin-700.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* ubuntu-300 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''), url('/fonts/ubuntu-v15-latin-300.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/ubuntu-v15-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* ubuntu-regular - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''), url('/fonts/ubuntu-v15-latin-regular.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/ubuntu-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* ubuntu-500 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''), url('/fonts/ubuntu-v15-latin-500.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/ubuntu-v15-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* ubuntu-700 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''), url('/fonts/ubuntu-v15-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/ubuntu-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* roboto-condensed-300 - latin */
  @font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
      url('/fonts/roboto-condensed-v19-latin-300.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/roboto-condensed-v19-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* roboto-condensed-regular - latin */
  @font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('/fonts/roboto-condensed-v19-latin-regular.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/roboto-condensed-v19-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* roboto-condensed-700 - latin */
  @font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
      url('/fonts/roboto-condensed-v19-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/roboto-condensed-v19-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    html,
    body,
    #__next {
      height: 100%;
      background-color: ${theme.colors.darkBlue};
    }

    body {
      font-family: ${theme.font.family.roboto};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.white300};
    }

    body {
      animation-duration: 0.9s;
      animation-name: slidein;
      animation-iteration-count: 1;
      overflow-x: hidden;
    }
    a {
      text-decoration: none;
    }
    @keyframes slidein {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    .balls {
      delay: 2s;
      animation-duration: 1.75s;
      animation-name: ballAnimation;
      animation-iteration-count: 1;
      position: absolute;
      width: 55%;
      right: 0;
      /* transition: all ease-in-out; */
      @media (max-width: ${theme.breakPoints.tablet}) {
        width: 90%;
        bottom: -60%;
      }
    }
    @keyframes ballAnimation {
      0% {
        right: -100px;
        opacity: 0.75;
      }
      100% {
        right: 0;
        opacity: 1;
      }
    }

    .retangle-paragraph {
      margin: 0 0 0 115px;
    }

    .balls2 {
      position: absolute;
      left: 0;
      width: 45%;
      z-index: -1;
    }

    @media (max-width: 1024px) {
      html {
        font-size: 60%;
      }
    }

    @media (max-width: 768px) {
      html {
        font-size: 56%;
      }
      .desktop-contact-header {
        display: none;
      }
      .desktop-portifolio {
        display: none;
      }
      .balls {
        display: none;
        margin-top: -10px;
        width: 60%;
      }
      .balls2 {
        display: none;
        width: 80%;
        margin-top: 150px;
      }

      .retangle-paragraph {
        margin: 0 0 0 95px;
        z-index: 2;
        .br-text {
          display: none;
        }
      }
    }

    @media (max-width: 330px) {
      html {
        font-size: 52%;
      }
    }
  `}
`

export default GlobalStyles
