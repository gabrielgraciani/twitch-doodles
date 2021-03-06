import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;

      backgroundHeader: string;

      boxShadow02: string;

      purple: string;
      purpleLight: string;

      cardBackground: string;

      inputBorderColor: string;
      inputBorderColorActive: string;
      inputError: string;

      toastInfoBackground: string;
      toastInfoColor: string;
      toastSuccessBackground: string;
      toastSuccessColor: string;
      toastErrorBackground: string;
      toastErrorColor: string;
    };
  }
}
