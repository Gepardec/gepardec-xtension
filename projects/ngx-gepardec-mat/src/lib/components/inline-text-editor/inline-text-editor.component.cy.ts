import {InlineTextEditorComponent} from './inline-text-editor.component';

describe('InlineTextEditorComponent', () => {
  it('mounts', () => {
    cy.mount(InlineTextEditorComponent);
  });

  it('#onStartEditing - should show form-field', () => {
    cy.mount(InlineTextEditorComponent, {
      componentProperties: {
        value: 'gepardec-extension',
      },
    })

    cy.findByTestId('add-button').should('not.exist');
    cy.findByTestId('form-field').should('not.exist');

    cy.findByTestId('text-field').click();
    cy.findByTestId('form-field').should('exist');
  });
})
