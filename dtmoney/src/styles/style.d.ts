import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            background: string,
            red: string,
            green: string,
            blue: string,
            bluelight: string,
            textbody: string,
            texttitle: string,
            shape: string,
            input: string
        },
    }
}