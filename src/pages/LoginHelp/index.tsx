import { ContentLayout } from 'pages/DashBoard/style'
import { HelpText } from 'pages/LoginHelp/style'
import door from 'door.svg'
import { StorySetLicense } from 'components/StorySetLicense'

export const LoginHelp = () => {
    return (
        <>
            <ContentLayout
                container
                alignItems="center"
                justifyContent="center"
            >
                <HelpText variant="h4">
                    <img src={door} style={{ width: "20rem" }} />
                    <StorySetLicense />
                    ログインしておりません。
                    <HelpText variant='body1'>
                        右上のログインボタンをクリックしてください。
                        <br />
                    </HelpText>
                </HelpText>
            </ContentLayout>
        </>
    )
}