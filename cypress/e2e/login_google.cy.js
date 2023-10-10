describe('LOGIN COM GOOGLE', () => {
    beforeEach('Accessar tela de login', () => {
        cy.visit('/entrar')
    })

    it('Login', () => {
        const username = Cypress.env('googleSocialLoginUsername')
        const password = Cypress.env('googleSocialLoginPassword')
        const loginUrl = Cypress.env('loginUrl')
        const cookieName = Cypress.env('cookieName')
        
        const socialLoginOptions = {
            username: username,
            password: password,
            loginUrl: loginUrl,
            headless: true,
            logs: false,
            loginSelector: '[href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=1021381966164-j473mb7av3jj716e0qptlapvr82cd3er.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fplay-project-forall.firebaseapp.com%2F__%2Fauth%2Fhandler&state=AMbdmDklljmWVp_v-l-0vWFCrj636EFQ70r25R8PIkZXks_jAbHfPbZEgMK2EbJYjBYn5IrDId43_THRlcr5H6thsyNaeWr7SxE1fEXM3CfhDa7tiNMMWrNnXBZooq144T3UACDtsKJk8j6iqVRyk1Y5e5ZH4is0AaoBoul27hYlzF1f_cshd-SdzCJSaIpANPt3ZX0DeDriujEr_cmrOq-_auEteXeYNFO7vxSlf4e8WTTM5vXXk-SrwWJNntM3oULMaPJyjL4VN7Ed6BhOJN6OK_i9NanFwUoAJDJATWnWrgC1Bok4IFWwwg97k57SLXtwpfPTW0T-T1rAwu4&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20profile&hl=pt&context_uri=https%3A%2F%2Fhom-prod-20.playservicos.com.br&service=lso&o2v=1&flowName=GeneralOAuthFlow"]',
            postLoginSelector: '.logo-google .mr-2'
        }
        return cy.task('GoogleSocialLogin', socialLoginOptions).then(({cookies}) => {
            cy.clearCookies()

            const cookie = cookies.filter(cookie => cookie.name === cookieName).pop()
            if(cookie) {
                cy.setCookie(cookie.name, cookie.value, {
                    domain: cookie.domain,
                    expiry: cookie.expires,
                    httpOnly: cookie.httpOnly,
                    path: cookie.path,
                    secure: cookie.secure
                })

                Cypress.Cookies.defaults({
                    preserve: cookieName
                })
            }
        })
        })
})