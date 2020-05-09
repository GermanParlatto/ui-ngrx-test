import { createYield } from 'typescript';

describe('Countries Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should display Regions', () => {
        cy.get('.dropdown__select').first().contains('Europe');

        cy.get('.dropdown__select').first().contains('Asia');
    });

    it('should display Countries when Region was selected', () => {
        cy.get('.dropdown__select').first().select('Asia');

        cy.get('.dropdown__select').last().select('Thailand');

        cy.get('.dropdown__select').last().should('be', 'Thailand');
    });

    it('should display Country Detail', () => {
        cy.get('.dropdown__select').first().select('Europe');
        cy.get('table').should('not.exist');
        cy.get('.dropdown__select').last().select('Italy');

        cy.get('table').should('be.visible');
    });
});
