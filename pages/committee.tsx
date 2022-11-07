import Navigation from '../components/navigation'
import Footer from '../components/footer'
import {Container, Typography, Card, CardContent, CardActions, Avatar, Grid, IconButton, Box } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import GithubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import { FunctionComponent } from 'react'

const committee: FunctionComponent = () => {
  const github = Symbol()
  const twitter = Symbol()
  const facebook = Symbol()
  const pageUrl = Symbol()

  type AccountServices = typeof github | typeof twitter | typeof facebook | typeof pageUrl
  
  interface AccountProps {
    accountServiceName: AccountServices
    accountServiceUrl: string
  }
  interface Member {
    name: string
    organization: string
    avatarUrl: string
    accounts: AccountProps[]
  }

  const committeeMembers: Member[] = [
    {
      name: '池田貴昭',
      organization: '三菱UFJリサーチ&コンサルティング',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '伊藤寛武',
      organization: '株式会社サイバーエージェント',
      avatarUrl: 'https://avatars.githubusercontent.com/u/20162070?v=4',
      accounts: [
        {
          accountServiceName: github,
          accountServiceUrl: 'https://github.com/HirotakeIto',
        },
      ]
    },
    {
      name: '井上領介',
      organization: '三菱UFJリサーチ&コンサルティング',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '小林庸平',
      organization: '三菱UFJリサーチ&コンサルティング',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '竹浪良寛',
      organization: '株式会社サイバーエージェント',
      avatarUrl: 'https://avatars.githubusercontent.com/u/83002005?v=4',
      accounts: [
        {
          accountServiceName: github,
          accountServiceUrl: 'https://github.com/ryaukwan',
        },
      ],
    },
    {
      name: '森脇大輔',
      organization: '株式会社サイバーエージェント',
      avatarUrl: 'https://avatars.githubusercontent.com/u/29854085?v=4',
      accounts: [
        {
          accountServiceName: github,
          accountServiceUrl: 'https://github.com/daimoriwaki',
        },
        /* Sample */
        // {
        //   accountServiceName: twitter,
        //   accountServiceUrl: 'https://twitter.com/',
        // },
        // {
        //   accountServiceName: facebook,
        //   accountServiceUrl: 'https://www.facebook.com/',
        // },
        // {
        //   accountServiceName: pageUrl,
        //   accountServiceUrl: 'https://www.example.com/',
        // },
      ],
    },
  ];

  const advisers = [
    {
      name: '杉谷和哉',
      organization: '岩手県立大学',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '髙橋雅生',
      organization: '一橋大学',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '中室牧子',
      organization: '慶應義塾大学',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '茂木良平',
      organization: '南デンマーク大学',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '山口慎太郎',
      organization: '東京大学',
      avatarUrl: '',
      accounts: [],
    },
  ]

  const Account: FunctionComponent<AccountProps> = props => {
    const { accountServiceName, accountServiceUrl } = props
    const accountConf = (s: AccountServices) => {
      switch (s) {
        case github:
          return {
            color: '#000000',
            icon: <GithubIcon />,
          }
        case twitter:
          return {
            color: '#1DA1F2',
            icon: <TwitterIcon />,
          }
        case facebook:
          return {
            color: '#1877F2',
            icon: <FacebookIcon />,
          }
        case pageUrl:
          return {
            color: '#21759B',
            icon: <LanguageIcon />,
          }
        default:
          return {
            color: '#21759B',
            icon: <LanguageIcon />,
          }
      }
    }
    return (
      <IconButton
        sx={{ color: accountConf(accountServiceName).color }}
        href={accountServiceUrl} target="_blank">
        {accountConf(accountServiceName).icon}
      </IconButton>
    )
  }

  return (
    <>
      <Navigation />
      <Container sx={{ m: 'auto', width: '100%', maxWidth: 1024 }}>
        <Typography component='h1' variant='h4' sx={{ marginTop: '2em' }}>
          運営主体について
        </Typography>
        <Typography component="p" variant="body1" sx={{ my: '1.5em' }}>
          EBPMデータベースの運営は有志によって行われています。
        </Typography>
        <Typography component='h2' variant='h5' sx = {{ marginTop: '2.5em' }}>
          運営主体チーム
        </Typography>
        <Typography component="p" variant="body1" sx={{ my: '1.5em' }}>
          運営チームはEBPMデータベースを通じたEBPMの普及・発展に尽力します。
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 12 }}>
          {committeeMembers.map((member: Member, index) => (
            <Grid item xs={8} sm={4} md={4} key={index}>
              <Card>
                <CardContent sx={{ pb: 0 }}>
                  <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item columns={{ xs: 2, sm: 2, md: 2 }} sx={{ mt: '0.5em' }}>
                      <Avatar>
                        <PersonIcon />
                      </Avatar>
                    </Grid>
                    <Grid item columns={{ xs: 8, sm: 8, md: 8 }}>
                    <Typography gutterBottom variant="caption" component="div">
                      {member.organization}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {member.name}
                    </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions disableSpacing={true} sx={{ pt: 0, pl: '1em', justifyContent: 'flex-end' }}>
                  <Box sx={{ minHeight: 40 }}>
                    {member.accounts.map(account => (
                      <Account
                        accountServiceName={account.accountServiceName}
                        accountServiceUrl={account.accountServiceUrl}
                      />
                    ))}
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography component='h2' variant='h5' sx = {{ marginTop: '2.5em' }}>
          アドバイザー
        </Typography>
        <Typography component="p" variant="body1" sx={{ my: '1.5em' }}>
          アドバイザーはEBPMデータベースに関する技術的助言を行います。
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 12 }}>
          {advisers.map((member: Member, index) => (
            <Grid item xs={8} sm={4} md={4} key={index}>
              <Card>
                <CardContent sx={{ pb: 0 }}>
                  <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item columns={{ xs: 2, sm: 2, md: 2 }} sx={{ mt: '0.5em' }}>
                      <Avatar>
                        <PersonIcon />
                      </Avatar>
                    </Grid>
                    <Grid item columns={{ xs: 8, sm: 8, md: 8 }}>
                    <Typography gutterBottom variant="caption" component="div">
                      {member.organization}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {member.name}
                    </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions disableSpacing={true} sx={{ pt: 0, pl: '1em', justifyContent: 'flex-end' }}>
                  <Box sx={{ minHeight: 40 }}>
                    {member.accounts.map(account => (
                      <Account
                        accountServiceName={account.accountServiceName}
                        accountServiceUrl={account.accountServiceUrl}
                      />
                    ))}
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography component='h2' variant='h5' sx = {{ marginTop: '2em' }}>
          協働機関
        </Typography>
        <Typography component="p" variant="body1" sx={{ my: '1.5em' }}>
          協働機関は所属社員のEBPMデータベースに関する活動を支援しています。
        </Typography>
      </Container>
      <Footer />
    </>
  )
}

export default committee