
import { registerInd } from '../support/registerIndspec.cy';
import { registerJuri } from '../support/registerJurispec.cy';



describe('Given that I logged in on Public User ', () => {
    it('passes', () => {
        const site1 = new site();
        cy.visit(site1.qa)
        registerInd();
        registerJuri();
        forgotPassword();

    })

    class site {
        qa = 'https://uat3.philppsr.lra.gov.ph/';
    }
})
